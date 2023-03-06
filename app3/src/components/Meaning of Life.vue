<template>
    <div>
        <div id="heading">
            <div id="title">THE MEANING OF LIFE</div>
            <div id="author"><i>according to seth spire</i></div>
        </div>

        <br>
        <br>

        <div id="panel-cycler">
            <div id="backward-sidebar" class="sidebar">
                <div class="btn" id="previous">&laquo;</div>
            </div>

            <div id="panel-area">

                <div class="panel visible" id="panel-1">
                    <b id="big-text">42</b>
                </div>

                <div class="panel invisible" id="panel-2">
                    <b class="panel-title">BUT FOR REAL...</b>
                    <br>
                    <br>
                    <i class="panel-desc">life is about leaving the world a little better than we found it and spreading love to all people</i>
                </div>

                <div class="panel invisible" id="panel-3">
                    <b class="panel-title">TOAD</b>
                    <i class="panel-desc">what else does one need besides toad?</i>
                    <br>
                    <img src="https://images.unsplash.com/photo-1600191252219-478b9482b410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="cute toad">
                </div>
            </div>

            <div id="forward-sidebar" class="sidebar">
                <div class="btn" id="next">&raquo;</div>
            </div>
        </div>
    </div>
</template>

<script>
window.addEventListener('load', function () {
  addOnclick()
})

function addOnclick() {
    let num_panels = 3
    let cur_panel_num = 1

    //backward
    document.getElementById("previous").onclick = function(){
        //hide current
        let cur = document.getElementById("panel-" + cur_panel_num)
        cur.className = "panel invisible"

        //show previous
        cur_panel_num = (cur_panel_num - 1)
        if (cur_panel_num == 0) {
            cur_panel_num = num_panels
        }
        let new_cur = document.getElementById("panel-" + cur_panel_num)
        new_cur.className = "panel visible"
    }

    //forward
    let nextBtn = document.getElementById("next")
    nextBtn.onclick = function(){
        //hide current
        let cur = document.getElementById("panel-" + cur_panel_num)
        cur.className = "panel invisible"

        //show next
        cur_panel_num = (cur_panel_num + 1)
        if (cur_panel_num > num_panels) {
            cur_panel_num = 1
        }
        let new_cur = document.getElementById("panel-" + cur_panel_num)
        new_cur.className = "panel visible"
    }
}
</script>

<style>
body {
    font-family: 'Arial Narrow', sans-serif;
    margin: 0;
    min-height: 100vh;
    min-width: 600px;
    background-image: linear-gradient(to bottom right, #c01bf2, #92a2f0, #2cf5f5);
}

#heading {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#title {
    font-family: 'Arial Narrow Bold', sans-serif;
    font-size: 6em;
    text-shadow: 0.25rem -0.125rem 0.3rem white;
}
#author {
    font-size: 1.5em;
}

#panel-cycler {
    display: flex
}
.sidebar {
    flex-grow: 1;
	width: 10%;
    align-items: center;
    justify-content: center;
    display:flex;
}
#panel-area {
    flex-grow: 1;
	width: 80%;
    background-color: rgba(255, 255, 255, 0.3);
    min-height: 20em;
    border-radius: 2em;

    align-items: center;
    justify-content: center;
    display:flex;
}

.btn {
    background: black;
    color: white;
    border-radius: 50%;
    font-size: 2em;
    height: 1.5em;
    width: 1.5em;
    text-align: center;
}
.btn:hover {
    background: white;
    color: black;   
}

.panel {
    align-items: center;
    justify-content: center;
    display:flex;
    flex-direction: column;
    margin: 0.25em;
    height: 30em;
}
.visible {
    display: flex;
}
.invisible {
    display: none;
}
img {
    max-width: 45%;
}
.panel-title {
    font-size: 3em;
}
.panel-desc {
    font-size: 1.5em;
}
#big-text {
    font-size: 25em;
}
</style>