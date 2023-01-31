import { useState } from "react"
import Modal from "../../../components/elements/Modal/Modal";
import Hero from "../../../components/Service/Ios/Hero/Hero";
import TrustedBy from "../../../components/Service/Ios/TrustedBy/TrustedBy";
import style from "./IosService.module.css"


const IosService = () => {
  const [showModal,setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    if(showModal) {
    setShowModal(false)
    } 
  }


  return (
    <div className={style.container} >
      <Hero modalHandler={handleModal}/>
      <TrustedBy />
      { showModal && (
        <div className={style.backDrop} onClick={closeModal}>
        </div>
      )}
      { showModal && <Modal handleModal/>}
    </div>
  )
}

export default IosService;