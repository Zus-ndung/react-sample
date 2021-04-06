/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
const handleClickChecBox = (key) => {
    const element = document.getElementById(key);
    if(element.style.color === "grey"){
      element.style.color = 'black';
    }else{
      element.style.color = "grey";
    }
};

function TodoItem({item}) {
  return (
    <label className="panel-block" id={item.key}>
            <input type="checkbox" onClick={() => handleClickChecBox(item.key)}/>
            {item.text}
    </label>
  );
}

export default TodoItem;