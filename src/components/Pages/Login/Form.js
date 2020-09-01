import React from 'react';
import { Inline, Link, MainContainer, CardContainer, BackCard, FrontCard } from 'components/Pages/Login';
import { Button, Card, Input } from 'components/Common';


export const Form = ({email, password, registrationEmail, registrationPassword, onChange, onClick, errors}) => {
    return  (
        <MainContainer>
            <CardContainer id="card">
                <FrontCard>
                    <form className='login'>
                        <Card heading='Login' subheading="Welcome back!!">
                            <Input type="email" placeholder="Email address" value={email} onChange={onChange}/>
                            {errors.email.length > 0 ? <span className='error'>{errors.email}</span> : ''}
                            <Input type="password" placeholder="Password" value={password} onChange={onChange}/>
                            {errors.password.length > 0 ? <span className='error'>{errors.password}</span>: ' '}
                            <Inline>
                                <Link onClick={(e) => onClick(e, 'signUp-card')}>Register?</Link>
                                <Button primary onClick={(e) => onClick(e, 'login')}
                                    disabled={!email || !password || errors.email.length > 0 || errors.password.length > 0}>Sign in</Button>
                            </Inline>
                        </Card>
                    </form>
                </FrontCard>
                <BackCard>
                    <form className='registration'>
                        <Card heading='Registration' subheading="Sign up to see the dashboard">
                            <Input type="registrationEmail" placeholder="Email address" value={registrationEmail} onChange={onChange}/>
                            {errors.registrationEmail.length > 0 && <span className='error'>{errors.registrationEmail}</span>}
                            <Input type="registrationPassword" placeholder="Password" value={registrationPassword} onChange={onChange}/>
                            {errors.registrationPassword.length > 0 && <span className='error'>{errors.registrationPassword}</span>}
                            <Inline>
                                <Link onClick={(e) => onClick(e, 'login-card')}>Alredy a member?</Link>
                                <Button primary onClick={(e) => onClick(e, 'submit')} 
                                    disabled={!registrationEmail || !registrationPassword || errors.registrationEmail.length > 0 || errors.registrationPassword.length > 0}>Register</Button>
                            </Inline>
                        </Card>
                    </form>
                </BackCard>
            </CardContainer>
        </MainContainer>
    )
}