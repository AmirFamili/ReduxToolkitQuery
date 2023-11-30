import React, { useState } from 'react';
import { useUpdateAlbumMutation } from '../app/services/AlbumApi';
import '../styles/UpdateAlbum.scss';

const UpdateAlbum = ({ selectedAlbum, setSelectedAlbum }) => {


    const [updateAlbum, { isLoading }] = useUpdateAlbumMutation();

    const submitAlbume = (event) => {
        event.preventDefault();
        updateAlbum({ id: selectedAlbum.id, title: event.target['title'].value });
        event.target.reset();

    }

    return (
        <div className='box1'>
            <form onSubmit={e => submitAlbume(e)}>
                <h3>Update Album:</h3>

                <div>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' value={selectedAlbum ? selectedAlbum.title : ''} onChange={(event) => setSelectedAlbum({ ...selectedAlbum, title: event.target.value })} />


                </div>
                <div>
                    <input type='submit' value="Update Album" disabled={!selectedAlbum || isLoading} />
                </div>
            </form>
        </div>

    );
}

export default UpdateAlbum;