/*
    *****************
    DONE BY:-   Muhammad Aaliyan Khan   |   20K-1856
                Mohammad Ahmed          |   20K-0457
    *****************
*/

function Count()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N+K)";
    document.getElementById("Time_Average").innerText="Θ(N+K)";
    document.getElementById("Time_Best").innerText="Ω(N+K)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(K)";

    c_delay=0;


    enable_buttons();
}