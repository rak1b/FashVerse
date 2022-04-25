import React from 'react'

import square1 from "./EyeGlassImages/Square/1.png";
import square2 from "./EyeGlassImages/Square/2.png";
import squareMale from "./EyeGlassImages/Square/male.png";
import squareFemale from "./EyeGlassImages/Square/female.png";
import round1 from "./EyeGlassImages/Round/1.png";
import round2 from "./EyeGlassImages/Round/2.png";
import roundMale from "./EyeGlassImages/Round/male.png";
import roundFemale from "./EyeGlassImages/Round/female.png";
import oval1 from "./EyeGlassImages/Oval/1.png";
import oval2 from "./EyeGlassImages/Oval/2.png";
import ovalMale from "./EyeGlassImages/Oval/male.png";
import ovalFemale from "./EyeGlassImages/Oval/female.png";
import heart1 from "./EyeGlassImages/Heart/1.png";
import heart2 from "./EyeGlassImages/Heart/2.png";
import heartMale from "./EyeGlassImages/Heart/male.png";
import heartFemale from "./EyeGlassImages/Heart/female.png";
import Oblong1 from "./EyeGlassImages/Oblong/1.png";
import Oblong2 from "./EyeGlassImages/Oblong/2.png";
import OblongFemale from "./EyeGlassImages/Oblong/female.png";
import OblongMale from "./EyeGlassImages/Oblong/male.png";


    
    const image_list = {
      Square: {
        1: square1,
        2: square2,
        male: squareMale,
        female: squareFemale,
        suggestion: `Look for rounded, thinner frames that are wider than your cheekbones, while remaining proportional to the length and width of your face: 
    
        Round frames: Bring contrast to angular features 
        Oval frames: Soften and balance defined square face lines  
        Coloured frames: Draw attention to the eyes `,
      },
      Round: {
        1: round1,
        2: round2,
        male: roundMale,
        female: roundFemale,
        suggestion: `Round faces are all soft curves and smooth lines, roughly the same width from the jaw up through to the brow. With round faces, the cheeks are usually full and the chin is rounded.  
    
        When choosing glasses for round face shapes, select frames that add definition. Choose bold, angular glasses with clean lines: 
        
            Rectangular frames: Add contrast to facial structure 
            Angular and geometric frames: Add sharp, distinct lines to create balance 
            Upswept frames such as cat-eye or D-frame: Draw attention to your eyes
        `,
      },
    
      Oval: {
        1: oval1,
        2: oval2,
        male: ovalMale,
        female: ovalFemale,
        suggestion: `Oval shaped faces have a narrow forehead and slightly narrow chin, which typically creates a long face silhouette.  
    
        For an oval face, choose glasses that emphasize the natural balance and add angles to your face’s subtle curves. Look for frames that are as wide as the widest part of your face, which is typically the area around the eyes, in a shape that adds subtle contrast to your features:  
        
            Square or rectangular glasses: Add sharper angles for definition 
            Geometric shapes: Get playful with shapes and angular contrast 
            D-frame: Wide frames compliment a narrow silhouette 
        
        `,
      },
      Heart: {
        1: heart1,
        2: heart2,
        male: heartMale,
        female: heartFemale,
        suggestion: `Oval shaped faces have a narrow forehead and slightly narrow chin, which typically creates a long face silhouette.  
    
        For an oval face, choose glasses that emphasize the natural balance and add angles to your face’s subtle curves. Look for frames that are as wide as the widest part of your face, which is typically the area around the eyes, in a shape that adds subtle contrast to your features:  
        
            Square or rectangular glasses: Add sharper angles for definition 
            Geometric shapes: Get playful with shapes and angular contrast 
            D-frame: Wide frames compliment a narrow silhouette 
        
        `,
      },
      Oblong: {
        1: Oblong1,
        2: Oblong2,
        male: OblongMale,
        female: OblongFemale,
        suggestion: `Oval shaped faces have a narrow forehead and slightly narrow chin, which typically creates a long face silhouette.  
    
        For an oval face, choose glasses that emphasize the natural balance and add angles to your face’s subtle curves. Look for frames that are as wide as the widest part of your face, which is typically the area around the eyes, in a shape that adds subtle contrast to your features:  
        
            Square or rectangular glasses: Add sharper angles for definition 
            Geometric shapes: Get playful with shapes and angular contrast 
            D-frame: Wide frames compliment a narrow silhouette 
        
        `,
      },
    };
    

export default image_list