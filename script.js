document.addEventListener("DOMContentLoaded", function () {
    const audioContainer = document.querySelector(".container");
    const audioData = [
        { id: 1, source: "source1.wav", target: "target1.wav", seedVC: "seed_vc1.wav", knnVC: "knn_vc1.wav", vec2wav2: "vec2wav2_vc1.wav", diffHier: "diff_hier_vc1.wav", ezVC: "ez_vc1.wav" },
        { id: 2, source: "source2.wav", target: "target2.wav", seedVC: "seed_vc2.wav", knnVC: "knn_vc2.wav", vec2wav2: "vec2wav2_vc2.wav", diffHier: "diff_hier_vc2.wav", ezVC: "ez_vc2.wav" },
        // Add more audio file objects up to 10
    ];

    audioData.forEach(audio => {
        let row = `
        <div class="audio-row">
            <div class="column">
                <h3>Source Utterance</h3>
                <audio controls>
                    <source src="audio/${audio.source}" type="audio/wav">
                </audio>
            </div>
            <div class="column">
                <h3>Target Prompt</h3>
                <audio controls>
                    <source src="audio/${audio.target}" type="audio/wav">
                </audio>
            </div>
            <div class="column">
                <h3>Leading VC Approaches</h3>
                <p>Seed VC</p>
                <audio controls>
                    <source src="audio/${audio.seedVC}" type="audio/wav">
                </audio>
                <p>KNN VC</p>
                <audio controls>
                    <source src="audio/${audio.knnVC}" type="audio/wav">
                </audio>
                <p>Vec2Wav2 VC</p>
                <audio controls>
                    <source src="audio/${audio.vec2wav2}" type="audio/wav">
                </audio>
                <p>Diff-Hier VC</p>
                <audio controls>
                    <source src="audio/${audio.diffHier}" type="audio/wav">
                </audio>
            </div>
            <div class="column">
                <h3>EZ-VC</h3>
                <audio controls>
                    <source src="audio/${audio.ezVC}" type="audio/wav">
                </audio>
            </div>
        </div>`;
        
        audioContainer.innerHTML += row;
    });
});
