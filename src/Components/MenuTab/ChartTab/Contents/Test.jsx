import React, { createRef, Fragment, PureComponent } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import artist from "../../../../artist.json"
import './Contents.scss';

class Row extends PureComponent {
  render() {
    const { style } = this.props
    const artistWeekly = artist.context.list
    

const artistWeeklyList= artistWeekly.map((data, idx) =>(
    <ul key={idx}>
        <li>{data.rank}</li>
        <li>{data.targetName}</li>
    </ul>
))
    return (
      <div className="ListItem" style={style}>
        <div className='chart_genre_name'>Aritist</div>
        <div className='chart_resultDatetime'>{artist.context.resultDatetime}</div>
        {artistWeeklyList}
      </div>
    );
  }
}

export default function Test() {
  return (
    <Fragment>
      <InfiniteLoader>
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            height={200}
            itemCount={1}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={300}
          >
            {Row}
          </List>
        )}
      </InfiniteLoader>
    </Fragment>
  );
}