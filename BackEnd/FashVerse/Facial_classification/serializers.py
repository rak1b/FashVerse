from rest_framework import serializers
from .models import FaceShapeFind

class FindShapeSerializer(serializers.ModelSerializer):
    # class FindShapeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = FaceShapeFind
        fields= '__all__'
        # fields= (
            
        #     'face'
        # )