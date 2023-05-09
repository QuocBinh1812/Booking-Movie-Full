// import React, { Fragment } from 'react'
// import './HomeMenuSelect.css'
// import { Select } from 'antd';


// const { Option } = Select;
// export default function HomeMenuSelect(props) {

//     return (

//         <div className="text-white boxShadowTop  " style={{ width: '80%', display: 'block', margin: 'auto', transform: 'translateY(-20%)' }}>
//             <div style={{ background: 'linear-gradient(0deg, rgb(96, 9, 240) 0%, rgb(129, 5, 135) 100%)', padding: '20px 20px' }}>
//                 <div className="row pb-3">
//                     <div className="col-12 col-lg-6 mb-3">

//                         <div className="text-3xl font-bold">WELCOME TO G-CINEMA</div>
//                         <div className="text-2xl font-bold">WHAT ARE YOU LOOKING FOR</div>
//                     </div>
//                     <div className="col-6 col-lg-3">
//                         <button className="glow-on-hover" type="button">
//                             <i className="fa fa-film text-2xl"></i>
//                             <span className="text-2xl ml-2 ">Movie</span>
//                         </button>
//                     </div>
//                     <div className="col-6 col-lg-3">
//                         <button className="glow-on-hover" type="button">
//                             <i className="fa fa-newspaper text-2xl"></i>
//                             <span className="text-2xl ml-2 ">News</span>
//                         </button>
//                     </div>
//                 </div>
//                 <div className="row pb-3" style={{ margin: 'auto' }}>
//                     <div className="col-12 col-md-6 pb-3">
//                         <div>
//                             <i className="fa fa-newspaper text-xl"></i>
//                             <span className="text-xl ml-2 ">theater system</span>
//                         </div>
//                         <Select

//                             showSearch
//                             style={{ width: '80%', cursor: 'pointer', borderRadius: '10px', height: '30px' }}
//                             placeholder="Search to Select"
//                             optionFilterProp="children"
//                             filterOption={(input, option) =>
//                                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//                             }
//                             filterSort={(optionA, optionB) =>
//                                 optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
//                             }
//                         >

//                             <Option value="1">đấ </Option>
//                             <Option value="2">Closed</Option>
//                             <Option value="3">Communicated</Option>
//                             <Option value="4">Identified</Option>
//                             <Option value="5">Resolved</Option>
//                             <Option value="6">Cancelled</Option>
//                         </Select>
//                     </div>
//                     <div className="col-12 col-md-6 pb-3">
//                         <div>
//                             <i class="fa fa-map-marker-alt text-xl"></i>
//                             <span className="text-xl ml-2 ">Cinemas</span>
//                         </div>
//                         <Select

//                             showSearch
//                             style={{ width: '80%', cursor: 'pointer', borderRadius: '10px', height: '30px' }}
//                             placeholder="Search to Select"
//                             optionFilterProp="children"
//                             filterOption={(input, option) =>
//                                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//                             }
//                             filterSort={(optionA, optionB) =>
//                                 optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
//                             }
//                         >
//                             <Option value="1">Not Identified</Option>
//                             <Option value="2">Closed</Option>
//                             <Option value="3">Communicated</Option>
//                             <Option value="4">Identified</Option>
//                             <Option value="5">Resolved</Option>
//                             <Option value="6">Cancelled</Option>
//                         </Select>
//                     </div>
//                     <div className="col-12 col-md-6 pb-3">
//                         <div>
//                             <i class="fa fa-calendar-alt text-xl"></i>
//                             <span className="text-xl ml-2 ">Dates</span>
//                         </div>
//                         <Select

//                             showSearch
//                             style={{ width: '80%', cursor: 'pointer', borderRadius: '10px', height: '30px' }}
//                             placeholder="Search to Select"
//                             optionFilterProp="children"
//                             filterOption={(input, option) =>
//                                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//                             }
//                             filterSort={(optionA, optionB) =>
//                                 optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
//                             }
//                         >
//                             <Option value="1">Not Identified</Option>
//                             <Option value="2">Closed</Option>
//                             <Option value="3">Communicated</Option>
//                             <Option value="4">Identified</Option>
//                             <Option value="5">Resolved</Option>
//                             <Option value="6">Cancelled</Option>
//                         </Select>,
//                     </div>
//                     <div className="col-12 col-md-6" >
//                         <button style={{ width: '40%' }} className="glow-on-hover" type="button">
//                             <span className="text-xl ml-2 ">Avaiable now</span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }
