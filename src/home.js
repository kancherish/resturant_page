
function createHome(){
    // Create the main container div
    const home = document.createElement('div');
    home.classList.add('home');
    
    
    // Create sideBar div
    const sideBar = document.createElement('div');
    sideBar.classList.add('sideBar');
    
    // Create info div
    const info = document.createElement('div');
    info.classList.add('info');
    info.textContent = 'WELCOME TO INDIAN KITCHEN ASMA\nCOME AND LEARN TO COOK DELICIOUS RECIPES';
    
    // Append info div to sideBar div
    sideBar.appendChild(info);
    
    // Create content1 div
    const content1 = document.createElement('div');
    content1.classList.add('content1');
    
    // Create head div for content1
    const head1 = document.createElement('div');
    head1.classList.add('head');
    head1.textContent = 'SOME AMAZING RECIPES TO TRY';
    
    // Create videos div for content1
    const videos1 = document.createElement('div');
    videos1.classList.add('videos');
    
    // Array of YouTube video URLs for content1
    const videoURLs1 = [
        'https://www.youtube.com/embed/pZatJXlod2Y?si=vJVryFshK2KdtIlz',
        'https://www.youtube.com/embed/udqnhHWJ_I8?si=WLjsqu6xNz0NyVZQ',
        'https://www.youtube.com/embed/rczzcdw7uIc?si=qYoIttXTCfz7OjpA'
    ];
    
    // Create iframes and append to videos1 div
    videoURLs1.forEach(url => {
        const iframe = document.createElement('iframe');
        iframe.width = '30%';
        iframe.height = '15%';
        iframe.src = url;
        iframe.title = 'YouTube video player';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        videos1.appendChild(iframe);
    });
    
    // Append head1 and videos1 to content1
    content1.appendChild(head1);
    content1.appendChild(videos1);
    
    // Create content2 div
    const content2 = document.createElement('div');
    content2.classList.add('content2');
    
    // Create head div for content2
    const head2 = document.createElement('div');
    head2.classList.add('head');
    head2.textContent = 'SOME VEG SPECIAL DISHES';
    
    // Create videos div for content2
    const videos2 = document.createElement('div');
    videos2.classList.add('videos');
    
    // Array of YouTube video URLs for content2
    const videoURLs2 = [
        'https://www.youtube.com/embed/UoLiDNHN9AQ?si=FGYtWSpYmjyVN9H2',
        'https://www.youtube.com/embed/EMCP2b02qks?si=Y3_LhDcrVeF2sEXz',
        'https://www.youtube.com/embed/NGm-YtvDA5Y?si=6QmleIIFLDgwW2N3'
    ];
    
    // Create iframes and append to videos2 div
    videoURLs2.forEach(url => {
        const iframe = document.createElement('iframe');
        iframe.width = '30%';
        iframe.height = '15%';
        iframe.src = url;
        iframe.title = 'YouTube video player';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        videos2.appendChild(iframe);
    });
    
    // Append head2 and videos2 to content2
    content2.appendChild(head2);
    content2.appendChild(videos2);
    
    // Append sideBar, content1, and content2 to home
    home.appendChild(sideBar);
    home.appendChild(content1);
    home.appendChild(content2);
    
    // Append home to the document body
    document.body.appendChild(home);

    return home;
}

export default createHome
