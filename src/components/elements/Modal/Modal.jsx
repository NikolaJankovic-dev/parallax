import Button from "../Button/Button";
import style from "./Modal.module.css";

const Modal = ({ modalHandler }) => {
  return (
    <div className={style.modalWrapper} onPointerDown={modalHandler}>
      <div className={style.photoDiv}>
        <div className={style.modalTitle}>
          You have a <span className={style.vision}>vision.</span>
          <br /> We have a way to get you there.
        </div>
        <p className={style.modalText}>
          Global Leader in new age digital product development
        </p>
      </div>
      <div className={style.form}>
        <div className={style.formTitle}>
          <h1 className={style.formMainTitle}>Speak to our experts</h1>
          <p>Please fill the form below.</p>
        </div>
        <form>
          <div className={style.nameAddress}>
            <div className={style.name}>
              Full name:
              <input type="text" className={style.input} />
            </div>
            <div className={style.address}>
              Email address
              <input type="text" className={style.input} />
            </div>
          </div>
          <div className={style.contactNo}>
            Contact number
            <input type="text" className={style.input} />
          </div>
          <textarea className={style.message} placeholder="Message" />
          <div className={style.submit}>
            <div className={style.calculate}>
              2 + 4 =
              <input type="text" className={style.highInput} />
            </div>
            <div className={style.submit}>
              <div className={style.submitButtonWrapper}>
                <Button
                  backGround="#0092FF"
                  textColor="white"
                  paddingX="45px"
                  paddingY="17px"
                  handler={modalHandler}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={style.modalFooter}>
        <div className={style.modalFooterText}>
          1000+ successful products delivered by 600+ certified experts.
        </div>
        <div className={style.footerLogos}></div>
      </div>
    </div>
  );
};

export default Modal;
