import { signup, logout, login, onAuthStateChanged } from './auth'
import { db } from "./config"
import { doc, setDoc, collection, deleteDoc, onSnapshot } from 'firebase/firestore'

const savesong = async function () {
    const songName = document.getElementById("songName").value.trim()
    const artist = document.getElementById("artist").value.trim()
    const rating = document.getElementById("rating").value.trim()

    try {
        const cityRef = doc(db, "songs", songName.toLowerCase() + "-" + artist.toLowerCase())

        await setDoc(cityRef, {
            name: songName,
            artist: artist,
            rating: rating,
            time: new Date()
        })
        console.log("City saved successfully.")

        document.getElementById("songName").value = ""
        document.getElementById("artist").value = ""
        document.getElementById("rating").value = ""
    } catch (error) {
        console.error("Error saving city: ", error)
    }
}

const deleteSong = async function (collection, docID) {
    try {
        await deleteDoc(doc(db, collection, docID))
        console.log('Document with ID ${docID} deleted successfully')
        alert("Song deleted successfully");
    } catch (error) {
        console.error("Error deleting city: ", error)
    }
}


const songCollection = collection(db, "songs")
onSnapshot(songCollection, (snapshot) => {
    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""

    snapshot.forEach((doc) => {
        const data = doc.data()
        const row = document.createElement("tr")

        row.innerHTML = `
            <td> ${doc.id} </td>
            <td> ${data.name} </td>
            <td> ${data.artist} </td>
            <td> ${data.rating} </td>
        `

        tableBody.appendChild(row)
    })
})

const deleteSongForm = document.querySelector("#deleteSongForm")
deleteSongForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const song = document.getElementById("songID").value
    deleteSong("songs", song)
})

const addSongForm = document.querySelector("#addSongForm")
addSongForm.addEventListener("submit", (event) => {
    event.preventDefault()
    savesong()
})