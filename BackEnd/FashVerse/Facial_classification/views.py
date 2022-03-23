from numpy import imag
from rest_framework import viewsets
from .models import FaceShapeFind
from .serializers import FindShapeSerializer
from rest_framework.response import Response
from rest_framework import status
import cv2
from matplotlib import pyplot as plt
from .FaceShape import classify_image_django

# class FaceShapeViewset(viewsets.ModelViewSet):
#    queryset = FaceShapeFind.objects.all()
#    serializer_class = FindShapeSerializer



def detect_face_shape(image_path):
   result = classify_image_django(image_path)
   print(result)
   
   res_text = ''
   error_response= {
         'Shape':"Couldn't find Your Face shape,Please Use a image where face and eye are clearly visible..",
         'Heart':0,
         'Oval':0,
         'Oblong':0,
         'Round':0,
         'Square':0,}
   
   if len(result)>1:
         # res_text = result
      #    for i in range(len(result)):
      #       print(result[i]['class'])
      #       res_text +=f"Face {i} : {result[i]['class']} \n"
      response=error_response
      # response="Please Use a clear face image of yourself.."
      
            
   elif len(result)==0:
         # response="Please Use a better quality image.."
      response=error_response
         
         
   else:
      #    res_text +=f"Face  : {result[0]['class']} \n"
         response = {
         'Shape':result[0]['class'],
         'Heart':result[0]['class_probability'][0],
         'Oval':result[0]['class_probability'][1],
         'Oblong':result[0]['class_probability'][2],
         'Round':result[0]['class_probability'][3],
         'Square':result[0]['class_probability'][4],
   }
         
            
   return response       

class FaceShapeViewset(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = FaceShapeFind.objects.all()
        serializer = FindShapeSerializer(queryset, many=True)
        return Response(serializer.data)

   #  def retrieve(self, request, pk=None):
   #      queryset = User.objects.all()
   #      user = get_object_or_404(queryset, pk=pk)
   #      serializer = UserSerializer(user)
   #      return Response(serializer.data)
    
    def create(self, request):
      data=request.data
      print(data)
      
      serializer = FindShapeSerializer(data=data)
      recieved_image_name = str(data['face'])
      print(str(data['face']))
      print(type(data['face']))
      # cv2.imshow(data['face'])
      if serializer.is_valid():
         serializer.save()
         from .FILEPATH import MEDIA_URL
         # image_path = MEDIA_URL+recieved_image_name
         # print(image_path)
         image_path = 'media/FaceShape/'+recieved_image_name
         # print(image_path)
         # image = cv2.imread(image_path,0)
         face_shape = detect_face_shape(image_path)
         
         return Response(face_shape,status=status.HTTP_201_CREATED)
      return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)

