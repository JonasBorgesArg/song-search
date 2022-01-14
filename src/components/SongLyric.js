const SongLyric = ({title,lyrics})=>{
	return (
		<section className="lyric-container">
			<h3>{title}</h3>
			<blockquote style={{whiteSpace: "pre-wrap"}}>{lyrics}</blockquote>
		</section>
		)
}

export default SongLyric;