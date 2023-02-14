import "./styles.css";

export const Input =({value,handleInputChange,params,labelValue})=>{
    
    return(
        <div className="ModalInput">
          <input
            className="Input"
            type="text"
            required
            value={value}
            onChange={(e) => handleInputChange(params, e.target.value)}
          />
          <label className="Label">{labelValue}</label>
        </div>
    )
}