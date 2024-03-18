import './Modal.css'

export default function ModalContent({closeModal}) {
  return (
    <div>
      <>
        <div onClick={closeModal} className="closeModal"></div>
        <div className="modalLogin">
            <div className="containerModal">
                <div className="crossModal">
                    <img src='' alt="" />
                </div>
                <div className="titleLogin d-flex">
                    <h2 className='titleConnect'>Connectez-vous</h2>
                    <p>Rejoins la communauté du RCP</p>
                </div>
                <div className="formLogin">
                    <form action="/ma-page-de-traitement" method="post">
                        <ul>
                            <li className='noStyle users liForm'>
                                <label form="name" className='nameModal'>E-mail</label>
                                <input type="text" id="name" name="user_name" />
                            </li>
                            <li className='noStyle password liForm'>
                                <label form="mail" className='nameModal'>Mot de Passe</label>
                                <input type="email" id="mail" name="user_mail" />
                            </li>
                            <li className='noStyle d-flex checkBoxContainer liForm'>
                                <p className='saveMDP'>se souvenir de mon mot de passe ?</p>
                                <input type="checkBox" className='checkBox' />
                            </li>
                            <li className='noStyle liForm'>
                                <button type="submit" className='connectionButton'>Connexion</button>
                            </li>
                            <li className='noStyle liForm'>
                                <a className='noStyle' href="">
                                    <p className='forgotPassword saveMDP'>Vous avez oublié votre mot de passe ?</p>
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="notMember d-flex">
                    <p className='notMemberText'>Pas encore Membre ?</p>
                    <button type="submit" className='notMemberButton'>Créer un compte</button>
                </div>
            </div>
        </div>
      </>
    </div>
  )
}
