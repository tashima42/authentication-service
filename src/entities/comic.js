export default function buildComic({ }) {
  return Object.freeze({
    makeComic
  })
  function makeComic({ title, subtitle, sku, authors, isbn, pages, publisher }) {
    checkTitle(title)
    checkSubtitle(subtitle)
    checkSku(sku)
    checkAuthors(authors)
    checkIsbn(isbn)
    checkPages(pages)
    checkPublisher(publisher)

    return {
      title,
      subtitle,
      sku,
      authors,
      isbn,
      pages,
      publisher
    }
  }

  function checkTitle(title) {
    if (!title) {
      throw new Error("Comic must have valid title.")
    }
    if (typeof title !== "string") {
      throw new Error("Comic's title must be a string.")
    }
    if (title.length <= 10) {
      throw new Error("Comic's title must be at least 10 characters long.")
    }
  }

  function checkSubtitle(subtitle) {
    if (subtitle) {
      if (typeof subtitle !== "string") {
        throw new Error("Comic's subtitle must be a string.")
      }
    }
    if (subtitle.length <= 10) {
      throw new Error("Comic's subtitle must be at least 10 characters long.")
    }
  }

  function checkSku(sku) {
    if (!sku) {
      throw new Error("Comic must have valid sku.")
    }
    if (typeof sku !== "string") {
      throw new Error("Comic's sku must be a string")
    }
  }

  function checkAuthors(authors) {
    if (!authors) {
      throw new Error("Comic must have valid authors.")
    }
    if (!Array.isArray(authors)) {
      throw new Error("Comic's authors must be an array.")
    }
    if (authors.length < 1) {
      throw new Error("Comic must have at least one author.")
    }
    authors.forEach(author => {
      if (typeof author !== "string") {
        throw new Error("Comic's author must be a string.")
      }
      if (author.length < 5) {
        throw new Error("Comic's author must be at least 5 characters long.")
      }
    })
  }

  function checkIsbn(isbn) {
    if (!isbn) {
      throw new Error("Comic must have a valid isbn.")
    }
    if (typeof isbn !== "string") {
      throw new Error("Comic's isbn must be a string.")
    }
  }

  function checkPages(pages) {
    if (!pages) {
      throw new Error("Comic must have valid pages.")
    }
    if (typeof pages !== "number") {
      throw new Error("Comic's pages must be a number.")
    }
  }

  function checkPublisher(publisher) {
    if (!publisher) {
      throw new Error("Comic must have a valid publisher.")
    }
    if (typeof publisher !== "string") {
      throw new Error("Comic's publisher must be a string.")
    }
    if (publisher.length < 5) {
      throw new Error("Comic's publisher must be at least 5 characters long.")
    }
  }
}
