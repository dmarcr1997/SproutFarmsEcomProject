import Directory from '../../components/directory/directory.component';
const Home = () => {

    const categories = [
        {
          id: '1',
          title: 'Microgreens',
          subtitle: 'Shop Now',
          imgUrl: 'https://images.unsplash.com/photo-1640671510956-8c8e1deb0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          id: '2',
          title: 'Mushrooms',
          subtitle: 'Shop Now',
          imgUrl: 'https://images.unsplash.com/photo-1622370387370-3eec28a387c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          id: '3',
          title: 'Subscriptions',
          subtitle: 'Sign Up',
          imgUrl: 'https://images.unsplash.com/photo-1593629718347-283811841101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80'
        },
        {
          id: '4',
          title: 'Recipies',
          subtitle: 'Get Cooking',
          imgUrl: 'https://images.unsplash.com/photo-1514946449984-5cf10926897f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
          id: '5',
          title: 'Learn',
          subtitle: 'Microgreens, Mushrooms, and Holistic Knowledge',
          imgUrl: 'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
    ];
    return (
        <Directory categories={categories}/>
    );
}

export default Home;
