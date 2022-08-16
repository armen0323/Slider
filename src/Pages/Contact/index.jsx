import '../Contact/style.scss';
function Contact(){

    return(
        <section className='contact-blok'>
            <h2 className='contact-title g-text-center'>Contact Us</h2>
            <p className='contact-text g-text-center'>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
            <div className='map'>
                <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48790.46786289528!2d44.00382927910155!3d40.155552500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aefd7ce8a04cb%3A0x7c9d072842f1546b!2z0JDRgNC80LDQstC40YAsINCQ0YDQvNC10L3QuNGP!5e0!3m2!1sru!2s!4v1659284748426!5m2!1sru!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <section className='contact-info'>
                
            </section>
            <section className='inputs-section'>
             <div className='contact-inputs'>
                <div className='inputs-one g-justify-betwen'>
                    <div className='label-div'>
                       <label htmlFor="text">Name</label>
                       <input type="text" id='text' placeholder='Name' className='names'/>
                    </div> 
                    <div className='label-div'>
                       <label htmlFor="email">Email</label>
                       <input type="text" id='email' placeholder='Email' className='names'/>
                     </div> 
                
                
                  
                   
                </div>
                  <div className='inputs-secnd '>
                       <label htmlFor="subject">Subject</label>
                       <input type="text" id='subject' placeholder='Subject' className='secnd'/>
                  </div> 
                  <div className='inputs-secnd '>
                       <label htmlFor="message">Message</label>
                       <textarea type="text" id='message' placeholder='Subject' className='textera'/>
                  </div>  
                  <div className='contact-btn'>
                    <button className='btn'>Let's Talk</button>
                    </div> 

             </div>
            </section>
        </section>
   );
}

export default Contact;