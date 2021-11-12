import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', is: 1 },
        { title: 'memory', is: 2 },
        { title: 'this wild darkness', is: 3 },
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }
    useEffect(() => {
        console.log("use Effect hook run", songs)
    }, [songs])
    useEffect(() => {
        console.log("use Effect hook run", age)
    }, [age])
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age:{age}</button>
        </div>
    );
}

export default SongList;
