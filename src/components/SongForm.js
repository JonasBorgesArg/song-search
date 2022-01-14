import React, {useState} from "react";

const initialForm = {
	artist:"",
	song:"",
};

const SongForm = ({handleSearch}) =>{
	const [form, setForm] = useState(initialForm)

	const handleChange = (e)=>(
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	);

	const handleSubmit = (e)=>{
		e.preventDefault()
		if(!form.artist|| !form.song){
			alert("Datos incompletos")
			return
		}

		//actualiza la variable form
		handleSearch(form);
		//actualiza el estado al valor inicial
		setForm(initialForm);
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="form">
			<input className="form-artist" type="text" name="artist" placeholder="ARTIST NAME" onChange={handleChange} value={form.artist} />
			<input className="form-song" type="text" name="song" placeholder="SONG NAME" onChange={handleChange} value={form.song} />
			<div className="submit">
				<input className="form-send" type="submit" value="Search" />
			</div>
			</form>
		</div>
		)
}

export default SongForm;