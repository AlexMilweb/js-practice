import React, { PureComponent } from 'react';
import { Grid } from 'react-bootstrap';
import './Main.css';

export default class Main extends PureComponent {
    render() {
        return (
            <div className='Main'>
                <Grid>
                    <div className='Main-content'>
                        <h1 className='Main-title'>
                            Добро пожаловать на&nbsp;проект с&nbsp;примерами компонентов на&nbsp;React&nbsp;JS&nbsp;и&nbsp;прочими веселыми штучками&nbsp;:)
                        </h1>
                        <p className='Main-paragraph text-muted'>
                            На&nbsp;страницах этого проекта находятся множество примеров компонентов, на&nbsp;которых я&nbsp;изучаю библиотеку React&nbsp;JS&nbsp;и&nbsp;прокачиваю свои знания в&nbsp;Java&nbsp;Script, svg, анимациях и&nbsp;т.&nbsp;д.
                        </p>
                        <p className='Main-paragraph text-muted'>
                            В&nbsp;качестве UI&nbsp;для экономии времени на&nbsp;верстке, используется модуль "react-bootstrap"
                        </p>
                        <h4 className='Main-paragraph text-danger'>
                            Выберите один из&nbsp;примеров в&nbsp;меню &laquo;Страницы с&nbsp;примерами&raquo;
                        </h4>
                        <div className='Main-logoWrapper'>
                            <div className='Main-reactLogo' />
                            <div className='Main-jsLogo' />
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}
