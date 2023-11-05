
import MainScreen from '../../pages/main';

type AppProps = {
    filmCardTitle: string;
    filmCardGenre: string;
    filmCardDate: number;
}

function App({ filmCardTitle, filmCardGenre, filmCardDate }: AppProps): JSX.Element {
  return (
    <MainScreen filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardDate={filmCardDate} />
  );
}

export default App;
