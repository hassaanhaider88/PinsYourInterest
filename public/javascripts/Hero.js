const FirstImgSlide=()=>{
  gsap.to("#FirstSlide",{
    bottom: "-30px",
    opacity:1,
    duration:2
  });
  gsap.to("#SecondSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#ThirdSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#FourSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
gsap.to('#DownArrow',{
  background:'#4E3800',
  duration:1
})
gsap.to("#FirstSlideBtn",{
  background:'#4E3800',
  duration:1
})
gsap.to("#SecondSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to("#ThirdSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to("#FourSlideBtn",{
  background:'#E1E1E1',
  duration:1
});
}
const SecondImgSlide=()=>{
  gsap.to("#FirstSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#SecondSlide",{
    bottom: "-30px",
    opacity:1,
    duration:2
  });
  gsap.to("#ThirdSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#FourSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });

gsap.to("#FirstSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to('#DownArrow',{
  background:'#618C7B',
  duration:1
})
gsap.to("#SecondSlideBtn",{
  background:'#618C7B',
  duration:1
})
gsap.to("#ThirdSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to("#FourSlideBtn",{
  background:'#E1E1E1',
  duration:1
});
}
const ThirdImgSlide=()=>{
  gsap.to("#FirstSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#SecondSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#ThirdSlide",{
    bottom: "-30px",
    opacity:1,
    duration:2
  });
  gsap.to("#FourSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });

gsap.to("#FirstSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to("#SecondSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to('#DownArrow',{
  background:'#0076D3',
  duration:1
})
gsap.to("#ThirdSlideBtn",{
  background:'#0076D3',
  duration:1
})
gsap.to("#FourSlideBtn",{
  background:'#E1E1E1',
  duration:1
});
}
const FourImgSlide=()=>{
  gsap.to("#FirstSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#SecondSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#ThirdSlide",{
    bottom: "-150px",
    opacity:0,
    duration:2
  });
  gsap.to("#FourSlide",{
    bottom: "-30px",
    opacity:1,
    duration:2
  });

gsap.to("#FirstSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to("#SecondSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to("#ThirdSlideBtn",{
  background:'#E1E1E1',
  duration:1
})
gsap.to('#DownArrow',{
  background:'#407A57',
  duration:1
})
gsap.to("#FourSlideBtn",{
  background:'#407A57',
  duration:1
});
}

function startLoop() {
  FirstImgSlide();
  setTimeout(function() {
         SecondImgSlide();
      setTimeout(function() {
          ThirdImgSlide();
          setTimeout(function() {
               FourImgSlide();
              setTimeout(startLoop, 6000);
          }, 6000); 
      }, 6000); 
    }, 6000); 
}

startLoop();
; // Start the loop when the page loads


const BottomIMGAnim=()=>{
  gsap.to('#BtmImgAnimOne',{
bottom:'0px',
opacity:1,
duration:2
  });

  console.log("animaton start")
gsap.to('#BtmImgAnimTwo',{
    bottom:'0px',
    opacity:1,
    duration:2
});
gsap.to('#BtmImgAnimThree',{
  bottom:'0px',
  opacity:1,
  duration:2
});
gsap.to('#BtmImgAnimFour',{
      bottom:'0px',
      opacity:1,
      duration:2
});
gsap.to('#BtmImgAnimFive',{
          bottom:'0px',
          opacity:1,
          duration:2
});
gsap.to('#BtmImgAnimSix',{
              bottom:'0px',
              opacity:1,
              duration:2
});
}

setTimeout(()=>{
  BottomIMGAnim();
},2000);

