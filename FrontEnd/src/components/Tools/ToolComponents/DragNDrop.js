import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";
import { useState } from "react";
export default function DragNDrop({SetFilesForOrginal}) {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);


  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
    SetFilesForOrginal(incommingFiles[0].file)
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files) => {
    console.log("list cleaned", files);
  };
  return (
    <Dropzone
      style={{ width: "350px",height:"350px" }}
      //view={"list"}
      onChange={updateFiles}
      minHeight="195px"
      onClean={handleClean}
      value={files}
      maxFiles={2}
      header={false}
      behaviour='replace'
      multiple={false}
      // footer={false}
      maxFileSize={2998000}
      // label="Drag'n drop files here or click to browse"
      //label="Suleta tus archivos aquí"
      accept="image/*"
      // uploadingMessage={"Uploading..."}
    //   url="http://127.0.0.1:8000/api/face-shape/"a
      //of course this url doens´t work, is only to make upload button visible
    //   uploadOnDrop
      //clickable={false}
      // fakeUploading
      //localization={"FR-fr"}
      disableScroll
    >
      {files.map((file) => (
        <FileItem
          {...file}
          key={file.id}
          onDelete={onDelete}
          onSee={handleSee}
          //localization={"ES-es"}
          resultOnTooltip
          preview
          info
          hd
        />
      ))}
      <FullScreenPreview
        imgSource={imageSrc}
        openImage={imageSrc}
        onClose={(e) => handleSee(undefined)}
      />
    </Dropzone>
  );
}
