import React from 'react';
import { useCreateAlbumMutation } from '../app/services/AlbumApi';
import '../styles/NewAlbum.scss';

const NewAlbum = () => {

    const [createAlbum, { isLoading }] = useCreateAlbumMutation();

    const submitAlbume = (event) => {
        event.preventDefault();
        createAlbum(event.target['title'].value);
        event.target.reset();

    }

    return (
        <div  className='box1'>
            <form onSubmit={e => submitAlbume(e)}>
                <h3>Create Album:</h3>

                <div>

                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' />

                </div>
                <div>
                    <input type='submit' value="Create Album" disabled={isLoading} />
                </div>
            </form>
        </div>

    );
}

export default NewAlbum;