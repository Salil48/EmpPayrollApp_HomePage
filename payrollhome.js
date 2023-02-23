window.addEventListener('DOMContentLoaded',(event)=>
{
    createInnerHtml();
});

const createInnerHtml=()=>
{
    const headerHtml= "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    //using template literal
    const innerHTML= `${headerHtml}
    <tr>
          <td><img class="profile" alt="" src="Assets/ProfilePic/Ellipse8.png"></td>
          <td>Vishal Garg</td>
          <td>Male</td>
          <td><div class='dept-label'>Engineer</div>
              <div class="dept-label">Finance</div>
          </td>
          <td>444444</td>
          <td>18 September 2020</td>
          <td><img id="1" onclick= "remove(this)" alt="delete" src="Assets/Icons/delete-black-18dp.svg">
            <img id="1" onclick= "update(this)" alt="edit" src="Assets/Icons/create-black-18dp.svg"></td>
    </tr>`;
    document.querySelector('#table-display').innerHTML=innerHTML;
}
