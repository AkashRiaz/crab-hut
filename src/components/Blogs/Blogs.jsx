import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const Blogs = () => {
  const blogs = useLoaderData()
  const ref = useRef();

  const handleButtonClick = async () => {
    const pdfBlob = await pdf(
      <Document>
        <Page size='A4' style={styles.page} ref={ref}>
          <div>
            {
              blogs.map(blog => (
                <div key={blog.id} className='bg-gray-200 rounded-lg my-10 px-3 md:px-8 py-10'>
                  <View style={styles.section}>
                    <Text>{blog.question}</Text>
                  </View>
                  <View style={styles.section}>
                    <Text>{blog.ans}</Text>
                  </View>
                </div>
              ))
            }
          </div>
        </Page>
      </Document>, options
    ).toBlob();

    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blogs.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [8.5, 11]
  };

  return (
    <div>
      <div className='mx-2 md:mx-12 my-10'>
        <h2 className='text-center text-5xl font-bold mb-10'>Blogs</h2>
        
        <button onClick={handleButtonClick} className='custom-primary-btn text-xl font-medium'>Download PDF</button>
      </div>
      <Document>
        <Page size='A4' style={styles.page} ref={ref}>
        <div className='mx-2 md:mx-12'>
          {
            blogs.map(blog => (
              <div key={blog.id} className='bg-gray-200 rounded-lg my-10 px-3 md:px-8 py-10'>
                <View style={styles.section}>
                  <Text><h2 className='text-3xl font-semibold mb-3'>{blog.question}</h2></Text>
                </View>
                <View style={styles.section}>
                  <Text><p>{blog.ans}</p></Text>
                </View>
              </div>
            ))
          }
        </div>
        </Page>
      </Document>
    </div>
  );
};

export default Blogs;
