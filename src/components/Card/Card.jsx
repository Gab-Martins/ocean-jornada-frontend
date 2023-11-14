export default function Card(props) {
    const item = props.item;

    return <div className='card'>
    <h2>{item.name}</h2>
      <div className='tags'>
        <div className='tag'>Tag 1</div>
        <div className='tag'>Tag 2</div>
        <div className='tag'>Tag 3</div>
      </div>
      <img src = {item.imageUrl}/>
  </div>
}
