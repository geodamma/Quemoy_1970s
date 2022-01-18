
	mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvZGFtbWEiLCJhIjoiY2t5anJkdmkxMjduODJucWg5NTl0NHE4NiJ9.sd2w5HnU9XahPX6SHOGs3A';
    const beforeMap = new mapboxgl.Map({
        container: 'before',
        style: 'mapbox://styles/geodamma/ckyjww8y2525r14mm7xi24zjx',
        center: [0, 0],
        zoom: 0
    });

    const afterMap = new mapboxgl.Map({
        container: 'after',
        style: 'mapbox://styles/geodamma/ckyia7lho35rn14lyxwfe9e3s',
        center: [0, 0],
        zoom: 0
    });

    // A selector or reference to HTML element
    const container = '#comparison-container';

    const map = new mapboxgl.Compare(beforeMap, afterMap, container, {
        // Set this to enable comparing two maps by mouse movement:
        // mousemove: true
    });
