import Blog from './components/Blog';
import Categories from './components/Cateogries';
import FooterBlog from './components/FooterBlog';
import HeaderBlog from './components/HeaderBlog';
import img from './images/code.jpg'
function App() {
  const list = [1, 1, 1, 1, 1, 1, 1, 11, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <>
      <main>
        <HeaderBlog
          autor='Kevin'
          blog={{
            title: 'Cuando usar un hook',
            content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
          }}
        />
        <Categories list={list} />
        <Blog
          title="Title post"
          date="Nov 12"
          content="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
          img={img}
        />
        <Blog
          title="Title post"
          date="Nov 12"
          content="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
          img={img}
        />
        <Blog
          title="Title post"
          date="Nov 12"
          content="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
          img={img}
        />
        <FooterBlog
          author='Kevin Gutierrez'
          phrase="Regsresa Regsresa para los mejores consejos!"
          website='kevin.com'
        />
      </main>
    </>
  );
}

export default App;
