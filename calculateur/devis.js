anime({
    targets: ".no",
    easing: "linear",
    loop: true,
    duration: 7000,
    keyframes: [
        { translateX: 0 },
        { translateX: "100%" },
        { translateY: 0 },
        { color: "#000" },
        { color: "#000" },
        { translateY: "-100%" },
        { translateX: 0 },
        { translateY: 0 },
        { color: "#026e00" },
        { color: "#026e00" },
        { translateY: 0 }
    ]
});

anime({
    targets: ".de",
    easing: "linear",
    loop: true,
    duration: 7000,
    keyframes: [
        { translateY: "-100%" },
        { translateX: "-100%" },
        { translateY: 0 },
        { color: "#000" },
        { color: "#000" },
        { translateY: 0 },
        { translateX: 0 },
        { translateY: 0 },
        { color: "#026e00" },
        { color: "#026e00" },
        { translateY: 0 }
    ]
});