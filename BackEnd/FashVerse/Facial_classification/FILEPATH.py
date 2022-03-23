import pathlib,os
CURRENT_FILE_PATH = pathlib.Path(__file__).absolute()
CURRENT_DIRECTORY_PATH = os.path.dirname(os.path.abspath(__file__))
ROOT_WORKING_DIRECTORY=pathlib.Path().absolute()
print(CURRENT_FILE_PATH)

print(CURRENT_DIRECTORY_PATH)

print(ROOT_WORKING_DIRECTORY)

DICT_PATH=os.path.join(CURRENT_DIRECTORY_PATH,'artifacts/','class_dictionary.json')
MODEL_PATH=os.path.join(CURRENT_DIRECTORY_PATH,'artifacts/','saved_model.pkl')
FACE_CASCADE=os.path.join(CURRENT_DIRECTORY_PATH,'opencv/haarcascades/','haarcascade_frontalface_default.xml')
EYE_CASCADE=os.path.join(CURRENT_DIRECTORY_PATH,'opencv/haarcascades/','haarcascade_eye.xml')
MEDIA_URL=os.path.join(CURRENT_DIRECTORY_PATH,'BackEnd/FashVerse/media')
