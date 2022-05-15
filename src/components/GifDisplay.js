export default function GifDisplay({ gif }) {
  const loaded = () => {
    return (
      <>
        <img src={gif.data.embed_url} alt={gif.data.title} />
        <h2>{gif.data.title}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>Go go gadget gifs!</h1>;
  };

  return gif ? loaded() : loading();

}
