const growers = document.querySelectorAll(".grow-trans");
const fills = document.querySelectorAll(".text-clip");
const leftFills = document.querySelectorAll(".text-clip-left");
const rightFills = document.querySelectorAll(".text-clip-right");
const downFills = document.querySelectorAll(".text-clip-down");
const colors = document.querySelectorAll(".background-change");

const textColors = document.querySelectorAll(".text-change");
const sliders = document.querySelectorAll(".slide");

const appearOptions = {
    threshold: 0
    // rootMargin: "0px 0px -100px 0px"
};


const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

growers.forEach(grower => {
    appearOnScroll.observe(grower);
});

fills.forEach(fill => {
    appearOnScroll.observe(fill);
});
leftFills.forEach(leftFill => {
    appearOnScroll.observe(leftFill);
});
rightFills.forEach(rightFill => {
    appearOnScroll.observe(rightFill);
});
downFills.forEach(downFill => {
    appearOnScroll.observe(downFill);
});
colors.forEach(color => {
    appearOnScroll.observe(color);
});

textColors.forEach(tcolor => {
    appearOnScroll.observe(tcolor);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});