// Apple Music Web Clone - Core JS Engine

// 1. Songs Database & Synced Lyrics
const songsDb = [
    {
        id: 1,
        title: "Oru Pere Varalaaru",
        artist: "Anirudh Ravichander",
        album: "Jana nayagan",
        url: "https://res.cloudinary.com/dm0nc31ta/video/upload/v1780993580/Oru-Pere-Varalaaru-MassTamilan.dev_rzbtkn.mp3",
        localUrl: "Songs/Oru-Pere-Varalaaru-MassTamilan.dev.mp3",
        art: "assets/oru_pere_varalaaru.png",
        duration: "3:53",
        themeColors: ["#d38312", "#a83279", "#111111"],
        lyrics: [
            { time: 0, text: "🎵 (Instrumental Intro)" },
            { time: 10, text: "Oru pere varalaaru thambi..." },
            { time: 15, text: "Iru vizhigalil paaru nanba..." },
            { time: 20, text: "Nenjil kudiya irukkum thalaivan" },
            { time: 24, text: "Unna paatha nethu bad-ass theri!" },
            { time: 28, text: "Ulagam muzhuvathum un peyare" },
            { time: 33, text: "Vanthal mass-u thalaivaa vaa vaa" },
            { time: 38, text: "Leo Leo Leo Leo Badass!" },
            { time: 43, text: "Suttu viralil aazhum mannan" },
            { time: 48, text: "Vetrikondavan vaazhthum ganam" },
            { time: 52, text: "🎵 (Synth Interlude)" },
            { time: 65, text: "Singa thadam ithu singara nadaithu..." },
            { time: 70, text: "Enge sentralum un aatchi thaan" },
            { time: 75, text: "Ethirthu ninravan thoolagum pothu" },
            { time: 80, text: "Vaazhve unadhu aanaiye..." }
        ]
    },
    {
        id: 2,
        title: "Nee Paartha Vizhigal",
        artist: "Vijay Yesudas, Shweta Mohan",
        album: "3 (Three)",
        url: "https://res.cloudinary.com/dm0nc31ta/video/upload/v1780993577/Nee_Paartha_Vizhigal_The_Touch_of_Love_qzb2kb.mp3",
        localUrl: "Songs/Nee Paartha Vizhigal (The Touch of Love).mp3",
        art: "assets/nee_paartha_vizhigal.png",
        duration: "4:39",
        themeColors: ["#ff007b", "#ff7b00", "#1a0826"],
        lyrics: [
            { time: 0, text: "🎵 (Acoustic Guitar Guitar Solo)" },
            { time: 12, text: "Nee paartha vizhigal..." },
            { time: 17, text: "Nee paartha nodikal..." },
            { time: 23, text: "Kettu kidakkum en nenjai thinbathu eno?" },
            { time: 34, text: "Nee thotta viralgal..." },
            { time: 40, text: "Nee thotta nodikal..." },
            { time: 45, text: "Kotti kidakkum en anbai unarvathu eno?" },
            { time: 57, text: "En vaazhvin touching neethaano..." },
            { time: 62, text: "En vaanil deepam neethaano..." },
            { time: 68, text: "Oru murai ennai paarthal pothum" },
            { time: 74, text: "En uyirum kooda tharuven unakkaaga..." },
            { time: 85, text: "Nee paartha vizhigal... nee thotta viralgal..." }
        ]
    },
    {
        id: 3,
        title: "Kannazhaga",
        artist: "Anirudh Ravichander, Shruti Haasan",
        album: "3 (Three)",
        url: "https://res.cloudinary.com/dm0nc31ta/video/upload/v1780993569/Kannazhaga_The_Kiss_of_Love_jaevmw.mp3",
        localUrl: "Songs/Kannazhaga (The Kiss of Love).mp3",
        art: "assets/kannazhaga.png",
        duration: "3:29",
        themeColors: ["#0a2e5c", "#00decb", "#050f1f"],
        lyrics: [
            { time: 0, text: "🎵 (Beautiful Violin Theme)" },
            { time: 10, text: "Kannazhaga... kalai azhaga..." },
            { time: 16, text: "Nenjil vanthu nee vizhum pothu..." },
            { time: 21, text: "Un vizhiyil en mugame paarkiren..." },
            { time: 27, text: "Un moochin veppam enil unarkiren..." },
            { time: 33, text: "Pennazhage... piravi azhage..." },
            { time: 39, text: "Kai thottu ennai izhukkum pothu..." },
            { time: 44, text: "En nenjai thirudiya thirudan neethana?" },
            { time: 50, text: "En uyiril kalanthu nirainthavanum neethana..." },
            { time: 57, text: "Un paadhangal nadakkum thadamellam..." },
            { time: 63, text: "En kaadhal pookkal thaan..." },
            { time: 69, text: "Muthal muthalaga theendiya anbe..." }
        ]
    },
    {
        id: 4,
        title: "Thalapathy Kacheri",
        artist: "S. P. Balasubrahmanyam, Ilaiyaraaja",
        album: "Thalapathy",
        url: "https://res.cloudinary.com/dm0nc31ta/video/upload/v1780993566/Thalapathy_Kacheri_ddimch.mp3",
        localUrl: "Songs/Thalapathy Kacheri.mp3",
        art: "assets/thalapathy_kacheri.png",
        duration: "3:12",
        themeColors: ["#f857a6", "#ff5858", "#1c0d12"],
        lyrics: [
            { time: 0, text: "🎵 (Classic Carnatic Drums & Flute)" },
            { time: 8, text: "Thalapathy kacheri thaan indru..." },
            { time: 12, text: "Thaarai thappattai muzhangidum nindru..." },
            { time: 16, text: "Paatu padichu aattam potu kalakuvom vaa!" },
            { time: 20, text: "Indha oore paarkum padi asathuvom vaa!" },
            { time: 25, text: "Vaanam thottu ponaalum thalaivan naandhaan" },
            { time: 29, text: "Kaalam maari ponaalum thozhan naandhaan" },
            { time: 33, text: "Natpu thaan engal uyir moochu..." },
            { time: 37, text: "Uravu thaan engal valimai aachu..." },
            { time: 42, text: "Kacheri thodangatum... Kacheri adhiratum!" }
        ]
    },
    {
        id: 5,
        title: "Enakenna Yaarum Illaye",
        artist: "Anirudh Ravichander",
        album: "Aakko",
        url: "https://res.cloudinary.com/dm0nc31ta/video/upload/v1780993566/Enakenna_Yaarum_Illaye_l6bgkz.mp3",
        localUrl: "Songs/Enakenna Yaarum Illaye.mp3",
        art: "assets/enakenna_yaarum_illaye.png",
        duration: "3:28",
        themeColors: ["#00c6ff", "#0072ff", "#000c1c"],
        lyrics: [
            { time: 0, text: "🎵 (Acoustic Guitar Plucking)" },
            { time: 8, text: "Enakenna yaarum illaye..." },
            { time: 13, text: "Nee irunthum kooda illaye..." },
            { time: 18, text: "Kaadhal ennum kadalil vizhunthen..." },
            { time: 23, text: "Ezhunthu vara vazhi theriyaamal thavithen..." },
            { time: 28, text: "Manathil ulla valigalai sonnalum..." },
            { time: 33, text: "Ketka aalillai indru enge ponaai?" },
            { time: 38, text: "En anbe... en arugil varuvaaya..." },
            { time: 43, text: "En kuralai nee kettu thirumbuvaaya..." },
            { time: 50, text: "Naan thurathum nizhalkalum nee thaan..." },
            { time: 56, text: "En thuyarathin deepamum nee thaan..." }
        ]
    },
    {
        id: 6,
        title: "Chella Magale",
        artist: "Sam C.S.",
        album: "Jana nayagan",
        url: "https://res.cloudinary.com/dm0nc31ta/video/upload/v1780993559/Chella-Magale-MassTamilan.dev_ldob0w.mp3",
        localUrl: "Songs/Chella-Magale-MassTamilan.dev.mp3",
        art: "assets/chella_magale.png",
        duration: "3:48",
        themeColors: ["#ff9966", "#ff5e62", "#1e0f0c"],
        lyrics: [
            { time: 0, text: "🎵 (Warm Melodic Flute Intro)" },
            { time: 12, text: "Chella magale... yen kannin maniye..." },
            { time: 18, text: "Un punnagai paarkum pothu thuyaram maranthen..." },
            { time: 24, text: "Un sirippil en ulagame kavizhthathu anbe..." },
            { time: 30, text: "Magale... unnai kaappaathuven en uyir thandhu..." },
            { time: 36, text: "Ethu vanthaalum naan un arugil irupen..." },
            { time: 42, text: "Thanthaiyin anbu thaan intha ulagin perumai..." },
            { time: 48, text: "Magalin mutham thaan en vaazhvin valimai..." }
        ]
    },
    {
        id: 7,
        title: "Raavana Mavandaa",
        artist: "A. R. Rahman",
        album: "Raavanan",
        url: "https://res.cloudinary.com/dm0nc31ta/video/upload/v1780993542/Raavana-Mavandaa-MassTamilan.dev_ibkold.mp3",
        localUrl: "Songs/Raavana-Mavandaa-MassTamilan.dev.mp3",
        art: "assets/oru_pere_varalaaru.png", // Reusing Lion cover for aggressive theme
        duration: "4:19",
        themeColors: ["#e65c00", "#f9d423", "#1f0900"],
        lyrics: [
            { time: 0, text: "🎵 (Fiery Tribal Drums Intro)" },
            { time: 15, text: "Raavana Mavandaa... Veera Singamadaa..." },
            { time: 20, text: "Pathu thalai kondavan naandaa..." },
            { time: 25, text: "Ennai vella yaar iruppaar intha ulagil..." },
            { time: 30, text: "Agniyile piranthu valarnthen..." },
            { time: 35, text: "Idi muzhakkam en kuralil ketpaai..." },
            { time: 40, text: "Ethirthu ninraal thoolagum paaru!" },
            { time: 45, text: "Raavananin aatchi thaan... indha mannil eppothum!" }
        ]
    },
    {
        id: 8,
        title: "Raga of Revenge",
        artist: "Anirudh Ravichander",
        album: "Vikram",
        url: "Songs/Raga of Revenge.mp3", // Points to local file directly!
        localUrl: "Songs/Raga of Revenge.mp3",
        art: "assets/thalapathy_kacheri.png", // Reusing cover
        duration: "2:21",
        themeColors: ["#c31432", "#240b36", "#0f0105"],
        lyrics: [
            { time: 0, text: "🎵 (Dark Suspenseful Strings)" },
            { time: 10, text: "Raga of Revenge... (Violent Beats)" },
            { time: 20, text: "En pagaiverin kuralai adakkuven..." },
            { time: 30, text: "Ezhuven naan marupadiyum iruttilirundhu..." },
            { time: 40, text: "Pazhivangum neram ithu... Vikram aarambam!" }
        ]
    }
];

// 2. Global State Variables
let currentSongIndex = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = 0; // 0: off, 1: repeat-all, 2: repeat-one
let playQueue = [];
let queueIndex = -1;
let historyStack = [];
let forwardStack = [];
let currentView = "listen-now";
let favorites = new Set(JSON.parse(localStorage.getItem("apple_music_favs")) || []);
let playlists = JSON.parse(localStorage.getItem("apple_music_playlists")) || [
    { id: "chill", name: "Tamil Chill Vibes", desc: "Mellow Tamil hits for relaxing.", songIds: [2, 3, 5, 6] },
    { id: "anirudh", name: "Anirudh Hits", desc: "Top high-octane scores and melodies by Anirudh.", songIds: [1, 2, 3, 5, 8] }
];

// Audio Core Element Setup
const audio = document.getElementById("mainAudioElement");

// 3. Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
    initUI();
    initAudioEventListeners();
    initControlEventListeners();
    initPlaylistEngine();
    
    // Load default view
    navigateToView("listen-now", false);
    
    // Auto-select first song but do not autoplay
    selectSongWithoutPlaying(0);
});

// 4. View Navigation Logic (Single Page Application Router)
function navigateToView(viewId, pushToHistory = true) {
    if (pushToHistory) {
        historyStack.push(currentView);
        forwardStack = []; // Reset forward stack when navigating
    }

    currentView = viewId;
    
    // Handle playlists route prefix e.g. playlist-chill
    let cleanViewId = viewId;
    if (viewId.startsWith("playlist-")) {
        cleanViewId = "view-playlist-details";
        const playlistId = viewId.replace("playlist-", "");
        renderPlaylistDetails(playlistId);
    }

    // Toggle active section
    document.querySelectorAll(".content-view").forEach(view => {
        view.classList.remove("active");
    });
    
    const targetSection = document.getElementById(cleanViewId.startsWith("view-") ? cleanViewId : `view-${cleanViewId}`);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    // Update active sidebar selection
    document.querySelectorAll(".sidebar-item").forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("data-view") === viewId) {
            item.classList.add("active");
        }
    });

    // Handle special active sidebar state for playlists
    document.querySelectorAll(".sidebar-playlist-item").forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("data-playlist-id") === viewId.replace("playlist-", "")) {
            item.classList.add("active");
        }
    });

    // Close drawers when swapping views on mobile/tablet
    if (window.innerWidth <= 768) {
        document.getElementById("lyricsDrawerPanel").classList.remove("open");
        document.getElementById("queueDrawerPanel").classList.remove("open");
        document.getElementById("btnToggleLyrics").classList.remove("active");
        document.getElementById("btnToggleQueue").classList.remove("active");
    }

    // Update history buttons state
    updateNavButtons();
}

function updateNavButtons() {
    document.getElementById("navBack").disabled = historyStack.length === 0;
    document.getElementById("navForward").disabled = forwardStack.length === 0;
}

// 5. Initialize UI Components
function initUI() {
    // Render Recently Played (Listen Now)
    const recentGrid = document.getElementById("recentlyPlayedGrid");
    recentGrid.innerHTML = "";
    // Grab first 4 songs for recently played
    songsDb.slice(0, 4).forEach(song => {
        recentGrid.appendChild(createGridItem(song));
    });

    // Render Deep Dive Grid
    const deepGrid = document.getElementById("deepDiveGrid");
    deepGrid.innerHTML = "";
    songsDb.slice(4, 8).forEach(song => {
        deepGrid.appendChild(createGridItem(song));
    });

    // Render Browse Tab Grid
    const browseGrid = document.getElementById("newReleasesGrid");
    browseGrid.innerHTML = "";
    songsDb.forEach(song => {
        browseGrid.appendChild(createGridItem(song));
    });

    // Render Albums View Grid
    const albumsGrid = document.getElementById("albumsGrid");
    albumsGrid.innerHTML = "";
    // Unique Albums mapping
    const uniqueAlbums = [];
    songsDb.forEach(song => {
        if (!uniqueAlbums.some(a => a.album === song.album)) {
            uniqueAlbums.push(song);
        }
    });
    uniqueAlbums.forEach(albumSong => {
        const item = document.createElement("div");
        item.className = "grid-item";
        item.innerHTML = `
            <div class="album-art-wrapper">
                <img src="${albumSong.art}" alt="${albumSong.album}" class="grid-item-art">
                <div class="play-overlay">
                    <button class="overlay-play-btn" data-album="${albumSong.album}">
                        <svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg>
                    </button>
                </div>
            </div>
            <span class="grid-item-title">${albumSong.album}</span>
            <span class="grid-item-subtitle">${albumSong.artist}</span>
        `;
        // Play whole album when overlay is clicked
        item.querySelector(".overlay-play-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            playAlbum(albumSong.album);
        });
        albumsGrid.appendChild(item);
    });

    // Render Songs Table
    renderSongsTable(songsDb, "songsTableBody");
}

function createGridItem(song) {
    const item = document.createElement("div");
    item.className = "grid-item";
    item.innerHTML = `
        <div class="album-art-wrapper">
            <img src="${song.art}" alt="${song.title}" class="grid-item-art">
            <div class="play-overlay">
                <button class="overlay-play-btn">
                    <svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg>
                </button>
            </div>
        </div>
        <span class="grid-item-title">${song.title}</span>
        <span class="grid-item-subtitle">${song.artist}</span>
    `;

    item.addEventListener("click", () => {
        loadSongIntoQueue(song.id);
    });
    
    return item;
}

// Render Table Rows
function renderSongsTable(songsList, containerId) {
    const tbody = document.getElementById(containerId);
    tbody.innerHTML = "";
    
    if (songsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 30px; color: var(--text-secondary);">No songs found</td></tr>`;
        return;
    }

    songsList.forEach((song, index) => {
        const isFav = favorites.has(song.id);
        const tr = document.createElement("tr");
        tr.setAttribute("data-song-id", song.id);
        if (currentSongIndex > -1 && songsDb[currentSongIndex].id === song.id) {
            tr.className = "active-song";
        }
        
        tr.innerHTML = `
            <td class="col-index">
                <span class="col-index-num">${index + 1}</span>
                <div class="playing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </td>
            <td class="col-title">
                <div class="table-title-cell">
                    <img src="${song.art}" alt="${song.title}" class="table-artwork">
                    <div class="title-info">
                        <span class="song-name-span">${song.title}</span>
                        <span class="artist-name-span">${song.artist}</span>
                    </div>
                </div>
            </td>
            <td class="col-album">${song.album}</td>
            <td class="col-favorite">
                <button class="favorite-btn ${isFav ? 'active' : ''}" data-song-id="${song.id}">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
            </td>
            <td class="col-duration">${song.duration}</td>
            <td class="col-actions">
                <button class="row-action-btn" data-song-id="${song.id}">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
                </button>
            </td>
        `;

        // Click row to play
        tr.addEventListener("click", (e) => {
            // Avoid triggering play if button clicked
            if (e.target.closest(".favorite-btn") || e.target.closest(".row-action-btn") || e.target.closest(".action-dropdown")) {
                return;
            }
            // Load this song as list context into queue
            setQueueFromTracks(songsList, song.id);
        });

        // Favorite Toggle click
        tr.querySelector(".favorite-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(song.id);
        });

        // Options dropdown trigger
        tr.querySelector(".row-action-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            showActionDropdown(e, song.id);
        });

        tbody.appendChild(tr);
    });
}

// 6. Action Dropdown Manager
let activeDropdown = null;

function showActionDropdown(event, songId) {
    // Remove existing dropdown if open
    if (activeDropdown) {
        activeDropdown.remove();
    }

    const button = event.currentTarget;
    const dropdown = document.createElement("div");
    dropdown.className = "action-dropdown show";
    
    // Build playlist options
    let playlistOptionsHTML = "";
    playlists.forEach(pl => {
        playlistOptionsHTML += `<button class="dropdown-item pl-add-item" data-playlist-id="${pl.id}">${pl.name}</button>`;
    });

    dropdown.innerHTML = `
        <button class="dropdown-item btn-add-next">Play Next</button>
        <button class="dropdown-item btn-add-queue">Add to Up Next</button>
        <hr style="border: 0; border-top: 1px solid var(--border-light); margin: 4px 0;">
        <span style="font-size:10px; font-weight:700; color:var(--text-secondary); padding: 4px 16px; display:block; text-transform:uppercase;">Add to Playlist</span>
        ${playlistOptionsHTML}
    `;

    // Append to body, calculate positions to prevent off-screen clip
    document.body.appendChild(dropdown);
    const rect = button.getBoundingClientRect();
    dropdown.style.position = "absolute";
    dropdown.style.left = `${rect.left + window.scrollX - 130}px`;
    dropdown.style.top = `${rect.bottom + window.scrollY + 5}px`;

    activeDropdown = dropdown;

    // Dropdown Action listeners
    dropdown.querySelector(".btn-add-next").addEventListener("click", () => {
        addSongNext(songId);
        dropdown.remove();
    });

    dropdown.querySelector(".btn-add-queue").addEventListener("click", () => {
        addSongToQueueEnd(songId);
        dropdown.remove();
    });

    dropdown.querySelectorAll(".pl-add-item").forEach(item => {
        item.addEventListener("click", () => {
            const plId = item.getAttribute("data-playlist-id");
            addSongToPlaylist(plId, songId);
            dropdown.remove();
        });
    });

    // Close on clicking outside
    setTimeout(() => {
        const closeDropdownHandler = (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener("click", closeDropdownHandler);
            }
        };
        document.addEventListener("click", closeDropdownHandler);
    }, 10);
}

// 7. Core Playback Logic
function setQueueFromTracks(tracks, activeSongId) {
    playQueue = [...tracks];
    const indexInQueue = playQueue.findIndex(s => s.id === activeSongId);
    if (indexInQueue > -1) {
        queueIndex = indexInQueue;
        // Find main index
        currentSongIndex = songsDb.findIndex(s => s.id === activeSongId);
        playActiveSong();
    }
}

function selectSongWithoutPlaying(index) {
    if (index < 0 || index >= songsDb.length) return;
    currentSongIndex = index;
    
    // Set playQueue if empty
    if (playQueue.length === 0) {
        playQueue = [...songsDb];
        queueIndex = index;
    }

    const song = songsDb[currentSongIndex];
    
    // Update player audio details without starting audio
    audio.src = song.url;
    audio.load();

    // Update displays
    updatePlayerBarUI(song);
    updateLyricsDisplay(song);
    updateActiveRowHighlight();
    updateQueueDrawerUI();
}

function playActiveSong() {
    if (queueIndex < 0 || queueIndex >= playQueue.length) return;
    
    const song = playQueue[queueIndex];
    currentSongIndex = songsDb.findIndex(s => s.id === song.id);

    // Swap audio source
    const prevSrc = audio.getAttribute("src");
    
    // Try streaming Cloudinary, fall back to local file if needed
    let playUrl = song.url;
    
    // Handle offline development checks
    audio.src = playUrl;
    
    audio.play().then(() => {
        isPlaying = true;
        updatePlayPauseButtonUI();
    }).catch(err => {
        console.warn("Primary audio source load failed, attempting local URL fallback...", err);
        audio.src = song.localUrl;
        audio.play().then(() => {
            isPlaying = true;
            updatePlayPauseButtonUI();
        }).catch(err2 => {
            console.error("Audio playback completely failed: ", err2);
        });
    });

    // Dynamic backdrop fluid colors shift!
    shiftBackdropTheme(song.themeColors);

    // Update displays
    updatePlayerBarUI(song);
    updateLyricsDisplay(song);
    updateActiveRowHighlight();
    updateQueueDrawerUI();
}

function updatePlayPauseButtonUI() {
    const playIcon = document.querySelector(".play-icon");
    const pauseIcon = document.querySelector(".pause-icon");
    const btn = document.getElementById("btnPlayPause");
    
    if (isPlaying) {
        playIcon.classList.add("hide");
        pauseIcon.classList.remove("hide");
        btn.title = "Pause";
        btn.setAttribute("aria-label", "Pause");
    } else {
        playIcon.classList.remove("hide");
        pauseIcon.classList.add("hide");
        btn.title = "Play";
        btn.setAttribute("aria-label", "Play");
    }
}

function updatePlayerBarUI(song) {
    document.getElementById("nowPlayingTitle").textContent = song.title;
    document.getElementById("nowPlayingArtist").textContent = `${song.artist} — ${song.album}`;
    document.getElementById("nowPlayingArt").src = song.art;
    
    // Handle scrolling marquee title if too long
    const container = document.querySelector(".song-title-scroll-container");
    const title = document.getElementById("nowPlayingTitle");
    if (title.offsetWidth > container.offsetWidth) {
        title.style.animation = "marquee 8s linear infinite";
    } else {
        title.style.animation = "none";
    }
}

function updateActiveRowHighlight() {
    const activeSongId = songsDb[currentSongIndex]?.id;
    document.querySelectorAll("tbody tr").forEach(tr => {
        const trSongId = parseInt(tr.getAttribute("data-song-id"));
        if (trSongId === activeSongId) {
            tr.classList.add("active-song");
        } else {
            tr.classList.remove("active-song");
        }
    });
}

// Dynamic fluid theme transition
function shiftBackdropTheme(colors) {
    if (!colors || colors.length < 2) return;
    
    const blob1 = document.querySelector(".blob-1");
    const blob2 = document.querySelector(".blob-2");
    const blob3 = document.querySelector(".blob-3");
    
    blob1.style.background = `radial-gradient(circle, ${colors[0]} 0%, rgba(255, 255, 255, 0) 70%)`;
    blob2.style.background = `radial-gradient(circle, ${colors[1]} 0%, rgba(255, 255, 255, 0) 70%)`;
    if (colors[2]) {
        blob3.style.background = `radial-gradient(circle, ${colors[2]} 0%, rgba(255, 255, 255, 0) 70%)`;
    }
}

// 8. Playback Core Controls Bindings
function initControlEventListeners() {
    const btnPlayPause = document.getElementById("btnPlayPause");
    btnPlayPause.addEventListener("click", togglePlay);

    const btnNext = document.getElementById("btnNext");
    btnNext.addEventListener("click", nextSong);

    const btnPrev = document.getElementById("btnPrev");
    btnPrev.addEventListener("click", prevSong);

    const btnShuffle = document.getElementById("btnShuffle");
    btnShuffle.addEventListener("click", () => {
        isShuffle = !isShuffle;
        btnShuffle.classList.toggle("active", isShuffle);
        if (isShuffle) {
            shuffleQueue();
        } else {
            // Restore natural queue order
            playQueue = [...songsDb];
            const activeId = songsDb[currentSongIndex]?.id;
            queueIndex = playQueue.findIndex(s => s.id === activeId);
        }
        updateQueueDrawerUI();
    });

    const btnRepeat = document.getElementById("btnRepeat");
    const repeatBadge = document.querySelector(".repeat-badge");
    btnRepeat.addEventListener("click", () => {
        isRepeat = (isRepeat + 1) % 3; // 0 -> 1 -> 2 -> 0
        if (isRepeat === 0) {
            btnRepeat.classList.remove("active");
            repeatBadge.classList.add("hide");
            btnRepeat.title = "Repeat Off";
        } else if (isRepeat === 1) {
            btnRepeat.classList.add("active");
            repeatBadge.classList.add("hide");
            btnRepeat.title = "Repeat All";
        } else if (isRepeat === 2) {
            btnRepeat.classList.add("active");
            repeatBadge.classList.remove("hide");
            btnRepeat.title = "Repeat One";
        }
    });

    // History controls
    document.getElementById("navBack").addEventListener("click", () => {
        if (historyStack.length > 0) {
            forwardStack.push(currentView);
            const prev = historyStack.pop();
            navigateToView(prev, false);
        }
    });

    document.getElementById("navForward").addEventListener("click", () => {
        if (forwardStack.length > 0) {
            historyStack.push(currentView);
            const next = forwardStack.pop();
            navigateToView(next, false);
        }
    });

    // Sidebar routes binding
    document.querySelectorAll(".sidebar-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const viewId = item.getAttribute("data-view");
            navigateToView(viewId);
        });
    });

    // Lyrics & Queue Panel Toggles
    const btnToggleLyrics = document.getElementById("btnToggleLyrics");
    const lyricsDrawer = document.getElementById("lyricsDrawerPanel");
    btnToggleLyrics.addEventListener("click", () => {
        const isOpen = lyricsDrawer.classList.toggle("open");
        btnToggleLyrics.classList.toggle("active", isOpen);
        
        // Hide other drawer if layout conflicts
        if (isOpen) {
            document.getElementById("queueDrawerPanel").classList.remove("open");
            document.getElementById("btnToggleQueue").classList.remove("active");
        }
    });

    document.getElementById("btnCloseLyrics").addEventListener("click", () => {
        lyricsDrawer.classList.remove("open");
        btnToggleLyrics.classList.remove("active");
    });

    const btnToggleQueue = document.getElementById("btnToggleQueue");
    const queueDrawer = document.getElementById("queueDrawerPanel");
    btnToggleQueue.addEventListener("click", () => {
        const isOpen = queueDrawer.classList.toggle("open");
        btnToggleQueue.classList.toggle("active", isOpen);
        
        if (isOpen) {
            lyricsDrawer.classList.remove("open");
            btnToggleLyrics.classList.remove("active");
            updateQueueDrawerUI();
        }
    });

    document.getElementById("btnCloseQueue").addEventListener("click", () => {
        queueDrawer.classList.remove("open");
        btnToggleQueue.classList.remove("active");
    });

    // Songs action bar Play/Shuffle
    document.getElementById("btnPlayAllSongs").addEventListener("click", () => {
        setQueueFromTracks(songsDb, songsDb[0].id);
    });

    document.getElementById("btnShuffleAllSongs").addEventListener("click", () => {
        isShuffle = true;
        document.getElementById("btnShuffle").classList.add("active");
        shuffleQueue();
        queueIndex = 0;
        playActiveSong();
    });

    // Volume Scrubber Drag logic
    const volumeSlider = document.getElementById("volumeSlider");
    const volumeFill = document.getElementById("volumeFill");
    const btnMute = document.getElementById("btnMute");
    
    let preMuteVolume = 0.8;
    
    volumeSlider.addEventListener("input", (e) => {
        const vol = parseFloat(e.target.value);
        audio.volume = vol;
        volumeFill.style.width = `${vol * 100}%`;
        updateVolumeIcon(vol);
    });

    btnMute.addEventListener("click", () => {
        if (audio.volume > 0) {
            preMuteVolume = audio.volume;
            audio.volume = 0;
            volumeSlider.value = 0;
            volumeFill.style.width = "0%";
            updateVolumeIcon(0);
        } else {
            audio.volume = preMuteVolume;
            volumeSlider.value = preMuteVolume;
            volumeFill.style.width = `${preMuteVolume * 100}%`;
            updateVolumeIcon(preMuteVolume);
        }
    });

    // Timeline Scrubber Drag logic
    const progressSlider = document.getElementById("progressSlider");
    const progressFill = document.getElementById("progressFill");
    
    progressSlider.addEventListener("input", (e) => {
        if (!audio.duration) return;
        const seekPercent = parseFloat(e.target.value);
        const seekTime = (seekPercent / 100) * audio.duration;
        audio.currentTime = seekTime;
        progressFill.style.width = `${seekPercent}%`;
    });

    // Theme Toggle
    const themeBtn = document.getElementById("btnThemeToggle");
    const sunIcon = themeBtn.querySelector(".sun-icon");
    const moonIcon = themeBtn.querySelector(".moon-icon");
    
    themeBtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme", !isDark);
        
        if (isDark) {
            sunIcon.classList.add("hide");
            moonIcon.classList.remove("hide");
        } else {
            sunIcon.classList.remove("hide");
            moonIcon.classList.add("hide");
        }
    });

    // Search bar filter keyup
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        // Push view to songs if search is typed
        if (query.length > 0 && currentView !== "songs") {
            navigateToView("songs");
        }

        const filtered = songsDb.filter(song => {
            return song.title.toLowerCase().includes(query) || 
                   song.artist.toLowerCase().includes(query) ||
                   song.album.toLowerCase().includes(query);
        });

        renderSongsTable(filtered, "songsTableBody");
    });

    // Hero carousel Banner Click
    document.querySelectorAll(".slide-play-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const songId = parseInt(btn.getAttribute("data-song-id"));
            loadSongIntoQueue(songId);
        });
    });
}

function updateVolumeIcon(vol) {
    const icon = document.getElementById("volumeIcon");
    if (vol === 0) {
        // Mute
        icon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
    } else if (vol < 0.3) {
        // Low volume
        icon.innerHTML = `<path d="M7 9v6h4l5 5V4L7 9H3zm11.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>`;
    } else {
        // High volume
        icon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
    }
}

// Playback actions
function togglePlay() {
    if (currentSongIndex === -1) {
        selectSongWithoutPlaying(0);
    }
    
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play().then(() => {
            isPlaying = true;
        }).catch(err => console.error(err));
    }
    updatePlayPauseButtonUI();
}

function nextSong() {
    if (playQueue.length === 0) return;
    
    if (isRepeat === 2) {
        // Repeat one
        audio.currentTime = 0;
        audio.play();
        return;
    }

    queueIndex++;
    if (queueIndex >= playQueue.length) {
        if (isRepeat === 1) {
            // Loop queue back to start
            queueIndex = 0;
        } else {
            // Stop at end
            queueIndex = playQueue.length - 1;
            isPlaying = false;
            audio.pause();
            updatePlayPauseButtonUI();
            return;
        }
    }
    
    playActiveSong();
}

function prevSong() {
    if (playQueue.length === 0) return;
    
    // If song is more than 3 seconds in, restart the track
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }

    queueIndex--;
    if (queueIndex < 0) {
        if (isRepeat === 1) {
            queueIndex = playQueue.length - 1;
        } else {
            queueIndex = 0;
        }
    }
    
    playActiveSong();
}

function shuffleQueue() {
    if (playQueue.length === 0) return;
    
    // Hold current song
    const currentSong = playQueue[queueIndex];
    
    // Fisher-Yates shuffle remaining
    let items = [...playQueue];
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    // Move current song to front of playQueue
    if (currentSong) {
        const currentIdxInShuffled = items.findIndex(s => s.id === currentSong.id);
        if (currentIdxInShuffled > -1) {
            items.splice(currentIdxInShuffled, 1);
        }
        items.unshift(currentSong);
    }

    playQueue = items;
    queueIndex = 0;
}

// 9. Audio Event Listeners Setup
function initAudioEventListeners() {
    // Timeupdate progress update
    const progressSlider = document.getElementById("progressSlider");
    const progressFill = document.getElementById("progressFill");
    const timeCurrent = document.getElementById("timeCurrent");
    const timeRemaining = document.getElementById("timeRemaining");
    
    audio.addEventListener("timeupdate", () => {
        if (!audio.duration) return;
        
        // Progress slider update
        const percent = (audio.currentTime / audio.duration) * 100;
        progressSlider.value = percent;
        progressFill.style.width = `${percent}%`;
        
        // Timestamp labels update
        timeCurrent.textContent = formatTime(audio.currentTime);
        timeRemaining.textContent = `-${formatTime(audio.duration - audio.currentTime)}`;

        // Dynamic Lyrics scroll synchronization
        syncLyricsTimeline(audio.currentTime);
    });

    audio.addEventListener("durationchange", () => {
        timeRemaining.textContent = `-${formatTime(audio.duration)}`;
    });

    // Auto-advance on track end
    audio.addEventListener("ended", () => {
        nextSong();
    });

    // Playback hardware triggers matching UI
    audio.addEventListener("play", () => {
        isPlaying = true;
        updatePlayPauseButtonUI();
        updateActiveRowHighlight();
    });

    audio.addEventListener("pause", () => {
        isPlaying = false;
        updatePlayPauseButtonUI();
    });
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// 10. Synced Lyrics Scrolling Engine
function updateLyricsDisplay(song) {
    const container = document.getElementById("lyricsScrollBox");
    container.innerHTML = "";

    document.getElementById("lyricsTitle").textContent = song.title;
    document.getElementById("lyricsArtist").textContent = song.artist;
    document.getElementById("lyricsArt").src = song.art;

    if (!song.lyrics || song.lyrics.length === 0) {
        container.innerHTML = `<div class="lyric-line placeholder-lyrics">Lyrics are not available for this song</div>`;
        return;
    }

    song.lyrics.forEach((line, idx) => {
        const div = document.createElement("div");
        div.className = "lyric-line";
        div.setAttribute("data-time", line.time);
        div.setAttribute("data-index", idx);
        div.textContent = line.text;

        // Skip directly to lyrics timestamp on click
        div.addEventListener("click", () => {
            audio.currentTime = line.time;
            if (!isPlaying) {
                togglePlay();
            }
        });

        container.appendChild(div);
    });
}

function syncLyricsTimeline(currentTime) {
    const lines = document.querySelectorAll("#lyricsScrollBox .lyric-line");
    if (lines.length === 0) return;

    let activeLine = null;
    
    // Find active line matching current elapsed time
    lines.forEach((line, idx) => {
        const lineTime = parseFloat(line.getAttribute("data-time"));
        const nextLine = lines[idx + 1];
        const nextLineTime = nextLine ? parseFloat(nextLine.getAttribute("data-time")) : Infinity;

        if (currentTime >= lineTime && currentTime < nextLineTime) {
            activeLine = line;
        }
    });

    if (activeLine) {
        // Remove active class from others
        lines.forEach(l => l.classList.remove("active"));
        activeLine.classList.add("active");

        // Scroll active lyrics line into viewport middle
        const scrollBox = document.getElementById("lyricsScrollBox");
        const activeRect = activeLine.getBoundingClientRect();
        const boxRect = scrollBox.getBoundingClientRect();
        
        const relativeTop = activeLine.offsetTop - scrollBox.offsetTop;
        const targetScroll = relativeTop - (boxRect.height / 2) + (activeRect.height / 2);
        
        scrollBox.scrollTo({
            top: targetScroll,
            behavior: "smooth"
        });
    }
}

// 11. Queue Management Drawer logic
function updateQueueDrawerUI() {
    const list = document.getElementById("queueListContainer");
    list.innerHTML = "";

    if (playQueue.length === 0) {
        list.innerHTML = `<div style="text-align:center; color: var(--text-secondary); margin-top:40px; font-size:13px;">Queue is empty</div>`;
        return;
    }

    // Display Up Next starting from queueIndex + 1
    const upNext = playQueue.slice(queueIndex + 1);
    
    // Prepend Currently Playing item in drawer
    const currentSong = playQueue[queueIndex];
    if (currentSong) {
        const curDiv = document.createElement("div");
        curDiv.className = "queue-item active-queue";
        curDiv.innerHTML = `
            <img src="${currentSong.art}" alt="" class="queue-item-art">
            <div class="queue-item-details">
                <h4>${currentSong.title}</h4>
                <p>Now Playing • ${currentSong.artist}</p>
            </div>
        `;
        list.appendChild(curDiv);
        
        // Section header
        if (upNext.length > 0) {
            const header = document.createElement("div");
            header.style.fontSize = "11px";
            header.style.fontWeight = "700";
            header.style.color = "var(--text-secondary)";
            header.style.margin = "12px 0 6px 4px";
            header.style.textTransform = "uppercase";
            header.textContent = "Next Up";
            list.appendChild(header);
        }
    }

    // Render remaining tracks
    upNext.forEach((song, sliceIdx) => {
        // Calculate true playQueue index
        const trueIdx = queueIndex + 1 + sliceIdx;
        const item = document.createElement("div");
        item.className = "queue-item";
        item.innerHTML = `
            <img src="${song.art}" alt="" class="queue-item-art">
            <div class="queue-item-details">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <button class="queue-remove-btn" data-index="${trueIdx}">
                <svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5"/></svg>
            </button>
        `;

        item.addEventListener("click", (e) => {
            if (e.target.closest(".queue-remove-btn")) return;
            queueIndex = trueIdx;
            playActiveSong();
        });

        item.querySelector(".queue-remove-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            removeFromQueue(trueIdx);
        });

        list.appendChild(item);
    });
}

function loadSongIntoQueue(songId) {
    const song = songsDb.find(s => s.id === songId);
    if (!song) return;

    // Check if song already next in queue, if not add it
    if (playQueue.length === 0) {
        playQueue = [song];
        queueIndex = 0;
    } else {
        // Add to end of queue or load next
        addSongToQueueEnd(songId);
    }
    
    // Skip to it
    const lastIdx = playQueue.findIndex(s => s.id === songId);
    if (lastIdx > -1) {
        queueIndex = lastIdx;
        playActiveSong();
    }
}

function addSongNext(songId) {
    const song = songsDb.find(s => s.id === songId);
    if (!song) return;
    
    // Inject song immediately after current queueIndex
    if (playQueue.length === 0) {
        playQueue.push(song);
        queueIndex = 0;
        playActiveSong();
    } else {
        playQueue.splice(queueIndex + 1, 0, song);
    }
    
    updateQueueDrawerUI();
}

function addSongToQueueEnd(songId) {
    const song = songsDb.find(s => s.id === songId);
    if (!song) return;
    
    playQueue.push(song);
    updateQueueDrawerUI();
}

function removeFromQueue(index) {
    if (index <= queueIndex) return; // Prevent removing history/active track
    playQueue.splice(index, 1);
    updateQueueDrawerUI();
}

document.getElementById("btnClearQueue").addEventListener("click", () => {
    // Clear queue keeping only current playing
    const current = playQueue[queueIndex];
    if (current) {
        playQueue = [current];
        queueIndex = 0;
    } else {
        playQueue = [];
        queueIndex = -1;
    }
    updateQueueDrawerUI();
});

// 12. Playlists Curation & LocalStorage Sync
function initPlaylistEngine() {
    // Playlist Modal Toggles
    const addPlBtn = document.getElementById("btnAddPlaylist");
    const modal = document.getElementById("playlistModal");
    const cancelModal = document.getElementById("btnCancelPlaylistModal");
    const confirmModal = document.getElementById("btnConfirmPlaylistModal");
    
    addPlBtn.addEventListener("click", () => {
        modal.classList.remove("hide");
        document.getElementById("modalPlaylistName").focus();
    });

    cancelModal.addEventListener("click", () => {
        modal.classList.add("hide");
        clearModalInputs();
    });

    confirmModal.addEventListener("click", () => {
        const name = document.getElementById("modalPlaylistName").value.trim();
        const desc = document.getElementById("modalPlaylistDesc").value.trim();
        if (!name) return;

        // Create new playlist structure
        const newPl = {
            id: "pl_" + Date.now(),
            name: name,
            desc: desc || "No description provided.",
            songIds: []
        };

        playlists.push(newPl);
        savePlaylistsToStorage();
        renderSidebarPlaylists();
        modal.classList.add("hide");
        clearModalInputs();
        
        // Navigate to new playlist view
        navigateToView(`playlist-${newPl.id}`);
    });

    // Populate Sidebar Playlists
    renderSidebarPlaylists();
}

function clearModalInputs() {
    document.getElementById("modalPlaylistName").value = "";
    document.getElementById("modalPlaylistDesc").value = "";
}

function renderSidebarPlaylists() {
    const sidebarPlContainer = document.getElementById("sidebarPlaylists");
    sidebarPlContainer.innerHTML = "";

    playlists.forEach(pl => {
        const a = document.createElement("a");
        a.href = "#";
        a.className = "sidebar-playlist-item";
        a.setAttribute("data-playlist-id", pl.id);
        a.textContent = pl.name;
        
        a.addEventListener("click", (e) => {
            e.preventDefault();
            navigateToView(`playlist-${pl.id}`);
        });

        sidebarPlContainer.appendChild(a);
    });
}

function savePlaylistsToStorage() {
    localStorage.setItem("apple_music_playlists", JSON.stringify(playlists));
}

// Render playlist detail workspace view
function renderPlaylistDetails(playlistId) {
    const pl = playlists.find(p => p.id === playlistId);
    if (!pl) return;

    // Header info update
    document.getElementById("playlistDetailsTitle").textContent = pl.name;
    document.getElementById("playlistDetailsDesc").textContent = pl.desc;
    
    // Style large card art with varying linear gradients based on name hash
    const colorsList = [
        ["#fa243c", "#7b00ff"],
        ["#00decb", "#0072ff"],
        ["#ff9966", "#ff5e62"],
        ["#a83279", "#d38312"],
        ["#f857a6", "#ff5858"]
    ];
    const colorIndex = Math.abs(pl.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colorsList.length;
    const colors = colorsList[colorIndex];
    const artCard = document.getElementById("playlistDetailsArt");
    artCard.style.background = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
    artCard.innerHTML = `<span style="font-size: 44px; color: white;">🎵</span>`;

    // Retrieve song data objects
    const plSongs = pl.songIds.map(id => songsDb.find(s => s.id === id)).filter(Boolean);
    
    // Render metadata info
    const totalCount = plSongs.length;
    const plMeta = document.getElementById("playlistDetailsMeta");
    plMeta.textContent = `${totalCount} song${totalCount === 1 ? '' : 's'} • ${totalCount * 3} minutes`;

    // Render table
    renderSongsTable(plSongs, "playlistSongsTableBody");

    // Hook Playlist Play/Delete actions
    const btnPlay = document.getElementById("btnPlayPlaylist");
    btnPlay.onclick = () => {
        if (plSongs.length > 0) {
            setQueueFromTracks(plSongs, plSongs[0].id);
        }
    };

    const btnDelete = document.getElementById("btnDeletePlaylist");
    // Show delete option only for custom playlists
    if (playlistId === "chill" || playlistId === "anirudh") {
        btnDelete.style.display = "none";
    } else {
        btnDelete.style.display = "block";
        btnDelete.onclick = () => {
            if (confirm("Are you sure you want to delete this playlist?")) {
                playlists = playlists.filter(p => p.id !== playlistId);
                savePlaylistsToStorage();
                renderSidebarPlaylists();
                navigateToView("listen-now");
            }
        };
    }
}

// Add/Remove songs from custom playlist
function addSongToPlaylist(playlistId, songId) {
    const pl = playlists.find(p => p.id === playlistId);
    if (!pl) return;
    
    if (!pl.songIds.includes(songId)) {
        pl.songIds.push(songId);
        savePlaylistsToStorage();
        
        // Re-render if currently viewing this playlist
        if (currentView === `playlist-${playlistId}`) {
            renderPlaylistDetails(playlistId);
        }
        
        // Toast message representation
        showToast(`Added to ${pl.name}`);
    } else {
        showToast(`Song already in ${pl.name}`);
    }
}

// 13. Favorites Management
function toggleFavorite(songId) {
    if (favorites.has(songId)) {
        favorites.delete(songId);
        showToast("Removed from Library");
    } else {
        favorites.add(songId);
        showToast("Added to Library");
    }
    
    // Save to LocalStorage
    localStorage.setItem("apple_music_favs", JSON.stringify([...favorites]));
    
    // Re-render current active views to update hearts
    if (currentView === "songs") {
        renderSongsTable(songsDb, "songsTableBody");
    } else if (currentView.startsWith("playlist-")) {
        const plId = currentView.replace("playlist-", "");
        renderPlaylistDetails(plId);
    }
}

// Album Play action
function playAlbum(albumName) {
    const albumSongs = songsDb.filter(s => s.album === albumName);
    if (albumSongs.length > 0) {
        setQueueFromTracks(albumSongs, albumSongs[0].id);
    }
}

// 14. Tiny Toast Notification Helper
function showToast(message) {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "80px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    toast.style.backgroundColor = "rgba(0,0,0,0.85)";
    toast.style.color = "white";
    toast.style.padding = "10px 24px";
    toast.style.borderRadius = "20px";
    toast.style.fontSize = "12px";
    toast.style.fontWeight = "600";
    toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
    toast.style.zIndex = "1000";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s, transform 0.3s";
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // animate in
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
    }, 10);
    
    // animate out and remove
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(20px)";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}
