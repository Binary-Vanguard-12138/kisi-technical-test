export default function Card(props) {
  const { w_size, h_size, title, description, image_url, hover_color } = props;

  return (
    <div
      className={`card card-w-${w_size} card-h-${h_size}`}
      style={{ backgroundImage: `url("${image_url}")` }}
    >
      <p className="title" style={{ padding: "20px" }}>
        {title}
      </p>
      <div
        className="overlay"
        style={{
          ...hover_color,
          padding: "20px",
        }}
      >
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
