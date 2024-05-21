// import React from 'react'
// import ProductCard from './ProductCard'

// const Product = () => {
//   return (
//     <div>
//       <ProductCard />
//     </div>
//   )
// }

// export default Product


import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import mens_kurta from '../../Data/men_kurta'
import ProductCard from './ProductCard'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../State/Product/Action'
import CircularProgress from '@mui/material/CircularProgress';

import Pagination from '@mui/material/Pagination';
const sortOptions = [
  { name: 'Price: Low to High', value: '', },
  { name: 'Price: High to Low', value: 'price_high', },
]

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
      { value: 'yellow', label: 'Yellow', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'S', label: 'S', checked: false },
      { value: 'M', label: 'M', checked: false },
      { value: 'L', label: 'L', checked: false },

    ],
  },

]



const SingleFilter = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '159-399', label: '₹159 To ₹399', },
      { value: '399-999', label: '₹399 To ₹999', },
      { value: '999-1999', label: '₹999 To ₹1999', },
      { value: '1999-2999', label: '₹1999 To ₹2999', },
      { value: '2999-3999', label: '₹2999 To ₹3999', },
    ],
  },
  {
    id: 'discount',
    name: 'Discount Range',
    options: [
      { value: '10', label: '10% And Above', },
      { value: '20', label: '20% And Above', },
      { value: '30', label: '30% And Above', },
      { value: '40', label: '40% And Above', },
      { value: '50', label: '50% And Above', },
      { value: '60', label: '60% And Above', },
      { value: '70', label: '70% And Above', },
      { value: '80', label: '80% And Above', },
      { value: '90', label: '90% And Above', },
    ],
  },
  {
    id: 'stock',
    name: 'Availability',
    options: [
      { value: 'in_stock', label: 'In Stock', },
      { value: 'out_of_stock', label: 'Out Of Stock', },
    ]
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()
  const product = useSelector(store => store)

  console.log("logging1>", product.products.products)

  const quaryString = decodeURIComponent(location.search)
  const searchParams = new URLSearchParams(quaryString)
  const colorValue = searchParams.get('color')
  const sizeValue = searchParams.get('size')
  const priceValue = searchParams.get('price')
  const discountValue = searchParams.get('discount')
  const sortValue = searchParams.get("sort")
  const pageNumber = searchParams.get('page') || 1
  const stock = searchParams.get('stock')
  const query = searchParams.get('query');
  console.log(" params.levelThree>" + params.levelThree)
  console.log('searching valuefrom params>>' + query)

  const alredyFilteredList = [...colorValue ? colorValue.split(',') : [], ...sizeValue ? sizeValue.split(',') : [], ...priceValue ? priceValue.split(',') : [], ...discountValue ? discountValue.split(',') : []]
  const singleFilteredList = [priceValue, discountValue, stock]


  // let minPrice=0
  // let maxPrice=10000
  const [minPrice, maxPrice] = priceValue === null ? [0, 10000] : priceValue.split('-').map(Number)
  useEffect(() => {


    const data = {
      category: params.levelThree,
      colors: colorValue || [],
      sizes: sizeValue || [],
      minPrice,
      maxPrice,
      minDiscount: discountValue || 0,
      sort: sortValue || 'price_low',
      pageNumber: pageNumber ? Number(pageNumber) : 0,
      pageSize: 10,
      stock: stock,
      query: query || ''

    }
    dispatch(findProducts(data))

  }, [params.levelThree,
    colorValue,
    minPrice,
    maxPrice,
    sizeValue,
    discountValue,
    sortValue,
    pageNumber,
    stock,
    query
  ])


  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search)
    let filterValue = searchParams.getAll(sectionId)
    if (filterValue.length > 0 && filterValue[0].split(',').includes(value)) {
      filterValue = filterValue[0].split(',').filter(item => item !== value)
      if (filterValue.length === 0) {
        searchParams.delete(sectionId)
      }
    }
    else {
      filterValue.push(value)
    }

    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(','))

    }
    const query = searchParams.toString()
    navigate({ search: `?${query}` })

  }


  const renderLoadingView = () => (
    <div className="lg:col-span-5  flex   justify-center bg-white py-5  items-center ">
      <div className=' '>
        <CircularProgress size="7rem" />
      </div>

    </div>

  )


  const singleFilter = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set(sectionId, e.target.value)
    const query = searchParams.toString()
    navigate({ search: `?${query}` })
  }

  const onchangePage = (event, value) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('page', value)
    const quary = searchParams.toString()
    navigate({ search: `?${quary}` })
  }

  const orderOfcall = (order) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('sort', order)
    const query = searchParams.toString()
    navigate({ search: `?${query}` })
    console.log("asdfghjkhf>>" + order)
  }


  const emptyResults = () => {

   return (
   <div className='flex flex-col justify-center items-center py-10 w-full'>
      <div className='flex flex-col justify-center items-center text-center ' >
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png" className='h-full w-full'/>
        <div className="text-2xl font-semibold mt-10">Sorry, no results found!</div>
        <div class="CqJpD_">Please check the spelling or try searching for something else</div>
      </div>
    </div>
)

  }

  return (
    <>
      {
        product.products.products.content?.length?
          <div className="bg-white">
            <div>
              {/* Mobile filter dialog */}
              <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div className="flex items-center justify-between px-4">
                          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                          <button
                            type="button"
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            onClick={() => setMobileFiltersOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>

                        {/* Filters */}

                        <form className="mt-4 border-t border-gray-200">
                          <h3 className="sr-only">Categories</h3>


                          {filters.map((section) => (
                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                              {({ open }) => (
                                <>
                                  <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                      <span className="font-medium text-gray-900">{section.name}</span>
                                      <span className="ml-6 flex items-center">
                                        {open ? (
                                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                  </h3>
                                  <Disclosure.Panel className="pt-6">
                                    <div className="space-y-6">
                                      {section.options.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center">
                                          <input
                                            onChange={() => handleFilter(option.value, section.id)}
                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.value}
                                            type="checkbox"
                                            defaultChecked={alredyFilteredList.includes(option.value)}
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                          />
                                          <label
                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                          >
                                            {option.label}
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                          {/*sim*/}
                          {SingleFilter.map((section, ind) => (
                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                              {({ open }) => (
                                <>
                                  <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                      <span className="font-medium text-gray-900">{section.name}</span>
                                      <span className="ml-6 flex items-center">
                                        {open ? (
                                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                  </h3>
                                  <Disclosure.Panel className="pt-6">
                                    <div className="space-y-6">
                                      <FormControl>
                                        <RadioGroup
                                          aria-labelledby="demo-radio-buttons-group-label"
                                          defaultValue={singleFilteredList[ind] ? singleFilteredList[ind] : ''}
                                          name="radio-buttons-group"
                                          className='flex  flex-col'
                                        >
                                          {section.options.map((option, optionIdx) => (



                                            <FormControlLabel onChange={(e) => singleFilter(e, section.id)} value={option.value} control={<Radio />} label={option.label} />


                                          ))}
                                        </RadioGroup>
                                      </FormControl>
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}

                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root>

              <main className="mx-auto  px-4 sm:px-6 lg:px-20">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          Sort
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (

                                  <p onClick={() => orderOfcall(option.value)} className={classNames(
                                    option.value === sortValue ? 'font-medium text-gray-900' : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                  )} >{option.name}</p>
                                  // <a
                                  //   href={option.href}
                                  // className={classNames(
                                  //   option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                  //   active ? 'bg-gray-100' : '',
                                  //   'block px-4 py-2 text-sm'
                                  // )}
                                  // >
                                  //   {option.name}
                                  // </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                      <span className="sr-only">View grid</span>
                      <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    {/* mobile filter */}
                    <button
                      type="button"
                      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <span className="sr-only">Filters</span>
                      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                  <h2 id="products-heading" className="sr-only">
                    Products
                  </h2>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6">
                    {/* Filters */}
                    <div>
                      <div className='py-10 flex justify-between'>
                        <h1 className='text-lg font-bold'>Filters</h1>
                        <FilterListIcon />
                      </div>

                      <form className="hidden lg:block">

                        {filters.map((section) => (
                          <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                            {({ open }) => (
                              <>
                                <h3 className="-my-3 flow-root">
                                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">{section.name}</span>
                                    <span className="ml-6 flex items-center">
                                      {open ? (
                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                      ) : (
                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                      )}
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                  <div className="space-y-4">
                                    {section.options.map((option, optionIdx) => (
                                      <div key={option.value} className="flex items-center">
                                        <input
                                          onChange={() => handleFilter(option.value, section.id)}
                                          id={`filter-${section.id}-${optionIdx}`}
                                          name={`${section.id}[]`}
                                          defaultValue={option.value}
                                          type="checkbox"
                                          defaultChecked={alredyFilteredList?.includes(option.value)}
                                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                          htmlFor={`filter-${section.id}-${optionIdx}`}
                                          className="ml-3 text-sm text-gray-600"
                                        >
                                          {option.label}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ))}
                        {SingleFilter.map((section, ind) => (
                          <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                            {({ open }) => (
                              <div>
                                <h3 className="-my-3 flow-root">
                                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                    <FormLabel sx={{ color: 'black' }} className="font-medium text-gray-900" id="demo-radio-buttons-group-label">{section.name} </FormLabel>
                                    <span className="ml-6 flex items-center">
                                      {open ? (
                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                      ) : (
                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                      )}
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                  <div className="space-y-4">
                                    <FormControl>
                                      <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={singleFilteredList[ind] ? singleFilteredList[ind] : ''}
                                        name="radio-buttons-group"
                                        className='flex  flex-col'
                                      >
                                        {section.options.map((option, optionIdx) => (



                                          <FormControlLabel onChange={(e) => singleFilter(e, section.id)} value={option.value} control={<Radio />} label={option.label} />


                                        ))}
                                      </RadioGroup>
                                    </FormControl>
                                  </div>
                                </Disclosure.Panel>
                              </div>

                            )}
                          </Disclosure>
                        ))}
                      </form>
                    </div>
                    {/* Product grid */}
                    {
                      product.products.isLoading ? renderLoadingView() : <div className="lg:col-span-5">
                        <div className='flex flex-wrap justify-center bg-white py-5 '>
                          {product.products.products && product.products?.products?.content?.map(item => <ProductCard product={item} />)}
                        </div>

                      </div>
                    }

                  </div>
                </section>
                <section className='width-full px-[3.5rem] py-10'>
                  <div className='px-4  flex justify-center'>
                    <Pagination onChange={onchangePage} count={product.products.products?.totalPages
                    } color="secondary" />
                  </div>
                </section>
              </main>
            </div>
          </div>
          : emptyResults()
      }
    </>
  )
}
