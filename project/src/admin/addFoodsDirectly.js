import addFoodsData from "../admin/addFoodsData";

function AddFoodsDirectly() {

    const jsons = [];

    function addFoodsDirectlyButton() {
        addFoodsData(jsons);
    }

    return (
        <div className="AddFoodsDirectly">
            <button onClick={addFoodsDirectlyButton}>데이터 보내기 </button>
        </div>
    );
}

export default AddFoodsDirectly;