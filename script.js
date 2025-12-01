// ----------------------
// 슬라이더 함수 생성기
// ----------------------
function bindSlider(sliderId, overlayId, textId) {
    const slider = document.getElementById(sliderId);
    const overlay = document.getElementById(overlayId);
    const text = document.getElementById(textId);

    slider.addEventListener("input", () => {
        overlay.style.opacity = slider.value;
        text.textContent = slider.value;
    });
}

// 세트 1 — 3D 캐릭터
bindSlider("sliderChar_A", "overlayChar_A", "opacityChar_A");
bindSlider("sliderChar_B", "overlayChar_B", "opacityChar_B");

// 세트 2 — 사람
bindSlider("sliderHuman_A", "overlayHuman_A", "opacityHuman_A");
bindSlider("sliderHuman_B", "overlayHuman_B", "opacityHuman_B");

// 세트 1 — 3D 캐릭터 -곱하기
bindSlider("sliderChar_E", "overlayChar_E", "opacityChar_E");
bindSlider("sliderChar_F", "overlayChar_F", "opacityChar_F");

// 세트 2 — 사람 - 곱하기
bindSlider("sliderHuman_E", "overlayHuman_E", "opacityHuman_E");
bindSlider("sliderHuman_F", "overlayHuman_F", "opacityHuman_F");


// ----------------------
// 참여자 ID 가져오기 (URL 파라미터)
// ----------------------
function getParticipantId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('participant'); // ?participant=12345
}

const participantId = getParticipantId();
console.log("참여자 ID:", participantId);


// ----------------------
// 저장 버튼 클릭 시
// ----------------------
document.getElementById("saveBtn").addEventListener("click", () => {

    const result = {
        char_all: document.getElementById("sliderChar_A").value,
        char_edge: document.getElementById("sliderChar_B").value,
        human_all: document.getElementById("sliderHuman_A").value,
        human_edge: document.getElementById("sliderHuman_B").value,

        char_all_mul: document.getElementById("sliderChar_E").value,
        char_edge_mul: document.getElementById("sliderChar_F").value,
        human_all_mul: document.getElementById("sliderHuman_E").value,
        human_edge_mul: document.getElementById("sliderHuman_F").value,
        participant_id: participantId || "N/A"
    };

    console.log("저장된 값:", result);

    // Google Apps Script URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbzItDNivFr8sUfWkDZYtojmBSJQMyqUsCrQKE8BLPo5tFX6TgAeqzYHzSPmI-wRxEdS1g/exec";

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // CORS 문제 방지
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result)
    })
    .then(() => alert("값이 저장되었습니다.\n다음 페이지로 이동합니다."))
    .catch(err => console.error(err))
    .finally(() => window.location.href = "nextpage.html");

    });




