import React from "react";
import { JustifiedImageGrid } from './JustifiedImageGrid';
import {getImages} from './testdata';

export default {
  title: `Components/JustifiedImageGrid`,
  component: JustifiedImageGrid,
  argTypes: {
    number: {
      description: "An example number argument type",
      control: { type: "number" },
      table: {
        defaultValue: 1,
      },
    },
  },
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const JustifiedImageGridDemo: React.FC<{ number }> = ({ number }) => {
  const images = getImages();
  const pageSize = 20;

  const [imagesToDisplay, setImagesToDisplay] = React.useState(images.slice(0,pageSize));

  const loadNextPage = async () => {
    await sleep(2000)
    return setImagesToDisplay((prev) => [...prev, ...images.sort(() => 0.5 - Math.random()).slice(0, pageSize)]);
  }
  // console.log(` images`, JSON.stringify(images, ));
  return (
    <>
    <button onClick={() => loadNextPage()}> INC </button>
    <JustifiedImageGrid images={imagesToDisplay} groupSize={pageSize} totalCount={200} rowHeight={300} loadNextPage={loadNextPage} />
    </>
)};

export const Default: any = JustifiedImageGridDemo.bind({});
Default.args = {
  number: 1,
};
