import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';


export const App: React.FC = () => {
    // Don't forget to attach the navigator to allow it to control the BackButton state as well
    // as browser history.

    return (
        <Router >
            <Routes>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Router>
    );
};
