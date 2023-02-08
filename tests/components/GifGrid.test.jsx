import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid />', () => {
  
  const category = "One Punch";

  test('Debe de mostrar el loading inicialmente', () => {

    render( <GifGrid /> );

  });
});