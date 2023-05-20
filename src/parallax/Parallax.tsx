import pb1 from '/parallax_bg_1.png'
import pb2 from '/parallax_bg_2.png'
import pb3 from '/parallax_bg_3.png'
//import pb4 from '/parallax_bg_4.png'
//import pb5 from '/parallax_bg_5.png'
//'import pb6 from '/parallax_bg_6.png'
import pb7 from '/parallax_bg_7.png'
import pb8 from '/parallax_bg_8.png'
import pb9 from '/parallax_bg_9.png'
import BioDiv from '../Bio';


interface ParallaxLayerProps {
  src: string;
  depth: number;
  trans: number[];
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ src, depth, trans }) => {
  const use_depth = depth == 1 ? 2 : depth;
  var scale = ((1 + (use_depth - 1) * 1) * 100);
  if(depth == 1) scale -= 2;
  const vwWidth = `calc(${scale}vw)`;
  var translationX = -50 * (use_depth - 1) + trans[0];
  const ty = -45 * (use_depth - 1) + trans[1];
  const translationZ = -100 * (use_depth - 1) + trans[2];
  const ratio = 0;
  const translation = `translate3d(${translationX}vw, calc(${ty*ratio}vh + ${ty*(1-ratio)}vw), ${translationZ}px)`;

  var element: JSX.Element = <img src={src} style={{ transform: translation, width: vwWidth }}/>;
  if (depth == 1) element = <div style={{ transform: translation, width: vwWidth }}>{BioDiv()}</div>
  return (
    <div className={`parallax_layer`}>
      <div className={`parallax_layer_container`} >
          {element}
      </div>
    </div>
  );
};

const Parallax: React.FC = () => {
  const parallaxLayers = [
    { src: pb1, depth: 9, trans: [0,-50,0]},
    { src: pb2, depth: 8, trans: [0,-25,0] },
    { src: pb3, depth: 7, trans: [0,100,0] },
    //{ src: pb4, depth: 6, trans: [0,100,0] },
    //{ src: pb5, depth: 5, trans: [0,100,0] },
    //{ src: pb6, depth: 5, trans: [0,100,0] },
    { src: pb7, depth: 4, trans: [0,100,0] },
    { src: pb8, depth: 3, trans: [0,100,0] },
    { src: pb9, depth: 2, trans: [0,100,0] },
    { src: "null", depth: 1, trans: [0.4,250,0] }
  ];
  
  return (
    <div className="parallax">
      {parallaxLayers.map(({ src, depth, trans }) => (
        <ParallaxLayer key={src} src={src} depth={depth} trans={trans}/>
      ))}
    </div>
  );
};

function GetParallaxDiv()
{
    return (
        <Parallax />
      )
}

export default GetParallaxDiv;