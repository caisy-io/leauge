import React, { FC, memo, useEffect } from "react";
import { SJustifiedImageGrid } from "./styles/SJustifiedImageGrid";
import { VariableSizeList, areEqual } from "react-window";
import { AssetImageCard } from "../asset-image-card";
import { generateRows } from "./generateRows";
import { SJustifiedImageGridCell } from "./styles/SJustifiedImageGridCell";
import { IJustifiedImageGrid, IJustifiedImageGridConfigOverwrite, IJustifiedImageGridEvent } from "./types";
import { SJustifiedImageGridRow } from "./styles/SJustifiedImageGridRow";
import InfiniteLoader from "react-window-infinite-loader";
import { IRow, IJustifiedImageGridConfig } from "./types";
import { LazyImage } from "./LazyImage";

const Row: React.FC<{
  data: {
    rows: IRow[];
    config: IJustifiedImageGridConfig;
    onImageSelection?: (event: IJustifiedImageGridEvent) => void;
    onImageClick?: (event: IJustifiedImageGridEvent) => void;
  };
  index: number;
  style: React.CSSProperties;
}> = memo(({ data: { rows, config, onImageSelection, onImageClick }, index, style }) => {
  const currRow = rows[index];
  const rowImages = currRow.images;

  return (
    <div style={style}>
      <SJustifiedImageGridRow style={index == 0 ? { paddingTop: "16px" } : {}}>
        {rowImages.map((image, i) => {
          return (
            <SJustifiedImageGridCell
              key={"ci_" + image.id}
              style={{
                width: image.renderedWidth,
                height: image.renderedHeight + config.imageLabelHeight,
                marginRight: i < rowImages.length - 1 ? config.paddingBetweenImages : 0,
              }}
            >
              <AssetImageCard
                key={"ai_" + image.id}
                skeleton={currRow.__loading}
                activated={image.selected}
                onImageClick={() => onImageClick && onImageClick({id: image.id, rowIndex: index, columnIndex: i})}
                onChange={() => onImageSelection && onImageSelection({id: image.id, rowIndex: index, columnIndex: i})}
                image={
                  <LazyImage
                    config={config}
                    skeleton={currRow.__loading}
                    key={"li_" + image.id}
                    src={image.src}
                    label={image.label}
                    blurHash={image.blurHash}
                  />
                }
                labelText={image.title ?? config.imageTitleFallback ?? ""} // Replace with your actual label text
              />
            </SJustifiedImageGridCell>
          );
        })}
      </SJustifiedImageGridRow>
    </div>
  );
}, areEqual);

export const JustifiedImageGrid: FC<IJustifiedImageGrid> = ({
  images,
  config,
  totalCount,
  scrollToRowIndex,
  loadNextPage,
  onImageSelection,
  onImageClick,
}) => {
  const infiniteLoaderRef = React.useRef<InfiniteLoader>(null);
  const loadingRef = React.useRef<boolean>(false);
  const [loadingNextPage, setLoadingNextPage] = React.useState<boolean>(false);
  const rowConfigs = generateRows(images, totalCount, config);

  console.log(` rowConfigs
  `, rowConfigs
  );
  if (loadingNextPage && rowConfigs.length > 0 && images.length !== totalCount) {
    rowConfigs[rowConfigs.length - 1].__loading = true;
  }

  const isItemLoaded = (index: number) => {
    return rowConfigs[index];
  };

  const loadMoreItems = () => {
    if (!loadingRef.current) {
      loadingRef.current = true;
      loadNextPage().then(() => {
        loadingRef.current = false;
        setLoadingNextPage(false);
      });
      setLoadingNextPage(true);
    }
  };

  useEffect(() => {
    if (Number.isInteger(scrollToRowIndex)) {
      setTimeout(() => {
        (infiniteLoaderRef as React.MutableRefObject<any>)?.current?._listRef.scrollToItem(scrollToRowIndex, "smart");
      }, 0);
    }
  }, [scrollToRowIndex]);

  useEffect(() => {
    console.log(` config.avgRowHeight`, config.avgRowHeight);
    (infiniteLoaderRef as React.MutableRefObject<any>)?.current?._listRef.forceUpdate();
  }, [config.avgRowHeight]);

  return (
    <SJustifiedImageGrid style={{ height: config.scrollViewHeight + config.paddingAroundGrid * 2 }}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={totalCount}
        loadMoreItems={loadMoreItems}
        ref={infiniteLoaderRef}
      >
        {({ onItemsRendered, ref }) => (
          <VariableSizeList
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={config.scrollViewHeight} // For instance.
            itemData={{ config, rows: rowConfigs, onImageSelection, onImageClick }}
            itemCount={rowConfigs.length}
            itemSize={(index) => rowConfigs[index].rowHeight}
            width={config.totalWidthOfView + config.paddingAroundGrid * 2}
          >
            {Row}
          </VariableSizeList>
        )}
      </InfiniteLoader>
    </SJustifiedImageGrid>
  );
};
