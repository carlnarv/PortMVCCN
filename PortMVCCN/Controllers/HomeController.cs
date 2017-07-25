using PortMVCCN.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace PortMVCCN.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (!ModelState.IsValid)
            {
                TempData["ValidateMess"] = 2;
                return View("Index");
            }
                else
            {
                try
                {
                    var body = "<p>Email From: <bold>{0}</bold></p><p>Subject: <bold>{1}</bold></p><p>Message: {2}</p>";
                    var from = "MyBlog<carlnarv@gmail.com>";
                   
                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = model.Subject,
                        Body = string.Format(body, model.FromEmail, model.Subject,  model.Body),

                        IsBodyHtml = true

                    };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);
                    //ViewBag.Message = 1;
                    TempData["Message"] = 1;
                    return RedirectToAction("Index");

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);

                }
            }


            return View("Index");

        }

    }
}