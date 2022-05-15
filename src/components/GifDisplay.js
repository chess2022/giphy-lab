export default function GifDisplay({ gif }) {
  const loaded = () => {
    return (
      <>
        <img src={gif.data[0].images.downsized.url} alt={gif.data[0].title} />
        <h2>{gif.data[0].title}</h2>
      </>
    );
  };

  const loading = () => {
    return <h2>Go ahead, type something and get a gif!</h2>;
  };

  return gif ? loaded() : loading();

}
