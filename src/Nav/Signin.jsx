import React, {Component} from 'react';
import '../styles/landing.css';
import User_Content_Image from '../Images/Landing/User_Content_Image.svg';
import Group229 from '../Images/Landing/Group229.svg';
import Group230 from '../Images/Landing/Group-230.svg';
import Group227 from '../Images/Landing/Group-227.svg';
import Group228 from '../Images/Landing/Group-228.svg';

export default class Signin extends Component {
    render() {
        const {handleSignIn} = this.props;
        return (
            <div className="panel-landing">
                <div className="container">
                    <div className="row">
                        <div className="menubar">
                            <ul>
                                <li><a href="#" className="Facebook">Facebook</a></li>
                                <li><a href="#" className="Twitter">Twitter</a></li>
                                <li><a href="#" className="Instagram">Instagram</a></li>
                                <li><a href="#" className="Legal">Legal</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '50px'}}>
                        <div className="img-00"></div>
                        <div className="col-sm-6 col-01">
                            <h2>Nuddle</h2>
                            <p>Nuddle is a decentralized photo sharing app for nudist with military grade encryption
                                that lets you share your nudes to only whomever you allow, no one else. Simply upload
                                and share it with your followers or publicly.</p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <button type="button" className="btn btn-black" onClick={handleSignIn.bind(this)}>Get Started</button>
                                </div>
                                <div className="col-sm-8">
                                    <span style={{fontSize: '14px'}}>By signing up, you confirm you <br />are <span
                                        style={{fontWeight: 'bold'}}>18 years old</span> and above</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <img src={User_Content_Image} className="img-fluid"/>
                            <div className="img-01"></div>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '180px'}}>
                        <div className="col-sm-5">
                            <div className="img-02"></div>
                            <img src={Group229} className="img-fluid"/>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-6 col-01">
                            <h2>Chat</h2>
                            <p>Nuddle is a decentralized photo sharing app for nudist with military grade encryption
                                that lets you share your nudes to only whomever you allow, no one else. Simply upload
                                and share it with your followers or publicly.</p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <button type="button" className="btn btn-black" onClick={handleSignIn.bind(this)}>Get Started</button>
                                </div>
                                <div className="col-sm-8">
                                    <span style={{fontSize: '14px'}}>By signing up, you confirm you <br />are <span
                                        style={{fontWeight: 'bold'}}>18 years old</span> and above</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '180px'}}>
                        <div className="col-sm-6 col-01">
                            <div className="img-03"></div>
                            <h2>Follow</h2>
                            <p>Nuddle is a decentralized photo sharing app for nudist with military grade encryption
                                that lets you share your nudes to only whomever you allow, no one else. Simply upload
                                and share it with your followers or publicly.</p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <button type="button" className="btn btn-black" onClick={handleSignIn.bind(this)}>Get Started</button>
                                </div>
                                <div className="col-sm-8">
                                    <span style={{fontSize: '14px'}}>By signing up, you confirm you <br />are <span
                                        style={{fontWeight: 'bold'}}>18 years old</span> and above</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <div className="img-04"></div>
                            <img src={Group230} style={{maxWidth: '85%'}} className="img-fluid"/>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '180px'}}>
                        <div className="col-sm-5">
                            <div className="img-05"></div>
                            <img src={Group227} className="img-fluid"/>
                            <img src={Group228} className="img-fluid"/>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-6 col-01">
                            <h2>Share</h2>
                            <p>Nuddle is a decentralized photo sharing app for nudist with military grade encryption
                                that lets you share your nudes to only whomever you allow, no one else. Simply upload
                                and share it with your followers or publicly.</p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <button type="button" className="btn btn-black"
                                    onClick={handleSignIn.bind(this)}
                                    >Get Started</button>
                                </div>
                                <div className="col-sm-8">
                                    <span style={{fontSize: '14px'}}>By signing up, you confirm you <br />are <span
                                        style={{fontWeight: 'bold'}}>18 years old</span> and above</span>
                                </div>
                            </div>
                            <div className="img-06"></div>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="panel-landing">
            //     <div className="panel-head">
            //         <h1 className="landing-heading">Welcome to Nuddle</h1>
            //         <i>Nuddle is a secure space where you can share your saucy photos with your mates.
            //             {/* All your private photos are encrypted and only have access by you and the people who you want to share with. */}
            //         </i>
            //     </div>
            //     <div>
            //         <img src="/images/demo.gif" width="700px"/>
            //     </div>
            //     <div style={{display: "flex", flexDirection: "column"}}>
            //         <div>
            //             <button
            //                 className="btn btn-outline-dark btn-lg"
            //                 id="signin-button"
            //                 onClick={handleSignIn.bind(this)}
            //             >
            //                 Get Naked with Blockstack*
            //             </button>
            //         </div>
            //         <div>
            //             <small>
            //                 *By signing up, you confirm you are <b>18 years old</b> and above
            //             </small>
            //         </div>
            //     </div>
            // </div>
        );
    }
}
