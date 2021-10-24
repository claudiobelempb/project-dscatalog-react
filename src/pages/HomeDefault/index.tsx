import { GridDefault } from '../../components/GridDefault';
import { HeadingDefault } from '../../components/HeadingDefault';

import { LayoutHomeDefault } from '../../layouts/LayoutHomeDefault';
import imgBackgrounHome from '../../assets/images/background-home.svg';
import { TextDefault } from '../../components/TextDefault';
import { ButtonDefault } from '../../components/ButtonDefault';

const HomeDefault: React.FC = () => {
  return (
    <div>
      <LayoutHomeDefault>
        <GridDefault size={2}>
          <div className={'bg-primary'}>
            <HeadingDefault tag="h3" mtop={200}>
              Conheça o melhor catálogo de produtos
            </HeadingDefault>
            <TextDefault tag={'p'}>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </TextDefault>
            <ButtonDefault
              type="medium"
              icon
              title="INICIE AGORA A SUA BUSCA"
              onClick={() => console.log('Click')}
              mtop={150}
            />
          </div>
          <div>
            <img
              src={imgBackgrounHome}
              alt="Conheça o melhor catálogo de produtos"
            />
          </div>
        </GridDefault>
      </LayoutHomeDefault>
    </div>
  );
};

export { HomeDefault };
