/** @jsx jsx */
import * as React from "react";
import { DispatchProp } from "react-redux";

import { jsx } from "@emotion/core";
import { push } from "connected-react-router";
import { FCHelper, vertical } from "./CommonStyles";
//import Option, { none, some, fromNullable } from 'fp-ts/lib/Option'
//import { pipe } from 'fp-ts/lib/pipeable'

type Props = DispatchProp;

export const GLTest: React.FC<Props> = ({ dispatch }) => {
  const helper = new FCHelper();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const glRef = React.useRef<WebGL2RenderingContext|null>(null);

  React.useEffect(() => {
    const gl = canvasRef.current?.getContext("webgl2",{
      preserveDrawingBuffer: false,
      alpha: false,
      antialias: false
    }) ?? null;

    const GL = WebGL2RenderingContext;
    let vertexShader = gl?.createShader(GL.VERTEX_SHADER) ?? null;
    let fragmentShader = gl?.createShader(GL.FRAGMENT_SHADER) ?? null;

    if (gl != null && vertexShader != null && fragmentShader != null){
      //[gl, vertexShader, fragmentShader]
    }


    let _ = undefined;
    _ = gl?.deleteShader(fragmentShader);
    fragmentShader = null;
    _ = gl?.deleteShader(vertexShader);
    vertexShader = null;
/*
    let gl: WebGL2RenderingContext|null = null;

    
    const shader = pipe(
      fromNullable(ctx),
      Option.chain(x => {
        gl = x; 
        return fromNullable(x.createShader(x.VERTEX_SHADER))
      })
    )
*/
    glRef.current = gl;
    return () => {};
  }, []);

  return (
    <div css={vertical}>
      <div>{helper.button("Main", () => dispatch(push("/")))}</div>
      <div>
        <canvas ref={canvasRef} width={"500px"} height={"300px"} />
      </div>
    </div>
  );
};
