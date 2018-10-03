(() => {
  const body = document.getElementsByTagName('BODY')[0]
  const imagesContainer = document.getElementsByClassName('swiper-container-horizontal')[0]
  const images = imagesContainer.getElementsByClassName('j-lazy-dpr-img')


  const handleDownload = ({ src }) => {
    const aTag = document.createElement('a')
    aTag.download = src
    aTag.href = src
    aTag.innerText = '<  - Download -  >'
    body.prepend(aTag)
  }



  for(let i=0;i<images.length;i++) {
    const image = images[i]
    const src = image.dataset.src
    handleDownload({ src })
  }



})();
