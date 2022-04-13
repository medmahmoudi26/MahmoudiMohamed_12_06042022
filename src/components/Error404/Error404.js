import {Link} from 'react-router-dom';
import {Component} from 'react';

class Error404 extends Component {
    render () {
        return (
            <section className="error404Background">
                <div className="error404Content">
                    <div className="error404Body">
                        <h3>La page que vous recherchez semble introuvable.</h3>
                        <Link to='/' className="error404Link">
                            Retour
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}